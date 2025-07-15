<template>
  <canvas ref="canvasRef" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationFrameId = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  // 多种颜色数组
  const colors = [
    'rgba(139, 92, 246, 0.6)', // 紫色
    'rgba(59, 130, 246, 0.6)', // 蓝色
    'rgba(16, 185, 129, 0.6)', // 绿色
    'rgba(245, 101, 101, 0.6)', // 红色
    'rgba(251, 191, 36, 0.6)', // 黄色
    'rgba(236, 72, 153, 0.6)', // 粉色
    'rgba(168, 85, 247, 0.6)', // 紫罗兰
    'rgba(34, 197, 94, 0.6)', // 翠绿
    'rgba(249, 115, 22, 0.6)', // 橙色
    'rgba(99, 102, 241, 0.6)', // 靛蓝
  ]

  // 设置线条宽度
  ctx.lineWidth = 1

  window.addEventListener('resize', resize, { passive: true })
  function resize() {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
    ctx.lineWidth = 1 // Re-apply line width after resize
  }

  class Star {
    constructor(x, y, r) {
      this.x = x
      this.y = y
      this.r = r || Math.random() * 1.5 + 0.5 // 随机大小 0.5-2
      this.x_speed = ((Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1)) / 6
      this.y_speed = ((Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1)) / 6
      this.color = colors[Math.floor(Math.random() * colors.length)] // 随机分配颜色
      this.lineColor = this.color.replace('0.6)', '0.3)') // 连线颜色为粒子颜色的半透明版本
    }

    move() {
      this.x -= this.x_speed
      this.y -= this.y_speed
    }

    render() {
      ctx.fillStyle = this.color // 使用粒子自己的颜色
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
    }

    changeX() {
      this.x_speed = -this.x_speed
    }

    changeY() {
      this.y_speed = -this.y_speed
    }
  }

  const stars = []
  for (let i = 0; i < 100; i++) {
    stars.push(new Star(Math.random() * width, Math.random() * height, 1))
  }

  const mouseStar = new Star(0, 0, 2)
  mouseStar.color = 'rgba(255, 255, 255, 0.8)' // 鼠标粒子使用白色
  mouseStar.lineColor = 'rgba(255, 255, 255, 0.3)' // 鼠标连线使用白色半透明

  function onMouseMove(e) {
    mouseStar.x = e.clientX
    mouseStar.y = e.clientY
  }
  // 使用document监听，因为canvas使用了pointer-events: none
  document.addEventListener('mousemove', onMouseMove, { passive: true })

  function line(p1, p2) {
    // 使用两个粒子中较亮的颜色作为连线颜色
    const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
    gradient.addColorStop(0, p1.lineColor || 'rgba(167, 139, 250, 0.2)')
    gradient.addColorStop(1, p2.lineColor || 'rgba(167, 139, 250, 0.2)')
    ctx.strokeStyle = gradient
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.closePath()
    ctx.stroke()
  }

  function onClick(e) {
    for (let i = 0; i < 3; i++) {
      const newStar = new Star(e.clientX, e.clientY, Math.random() * 1.5 + 0.5)
      newStar.color = colors[Math.floor(Math.random() * colors.length)] // 点击产生的粒子也有随机颜色
      newStar.lineColor = newStar.color.replace('0.6)', '0.3)')
      stars.push(newStar)
      stars.shift()
    }
  }
  // 使用document监听，因为canvas使用了pointer-events: none
  document.addEventListener('click', onClick, { passive: true })

  function animate() {
    ctx.clearRect(0, 0, width, height)

    mouseStar.render()

    stars.forEach((star) => {
      star.move()
      if (star.x < 0 || star.x > width) star.changeX()
      if (star.y < 0 || star.y > height) star.changeY()
      star.render()
    })

    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        if (Math.abs(stars[i].x - stars[j].x) < 50 && Math.abs(stars[i].y - stars[j].y) < 50) {
          line(stars[i], stars[j])
        }
      }
      if (Math.abs(stars[i].x - mouseStar.x) < 120 && Math.abs(stars[i].y - mouseStar.y) < 120) {
        line(stars[i], mouseStar)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
  }

  animate()

  // Cleanup on component unmount
  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('click', onClick)
    window.removeEventListener('resize', resize)
  })
})
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  /* 修复右键菜单问题 */
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  /* 确保不影响页面的右键菜单 */
  -webkit-user-drag: none;
  -moz-user-drag: none;
}
</style> 