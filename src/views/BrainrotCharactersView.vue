<template>
  <div class="page-container">
    <!-- 头部导航栏 -->
    <Header />

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="container">
        <h1 class="page-title">Italian Brainrot Characters</h1>

        <div class="content-area">
          <!-- 角色列表网格 -->
          <section class="characters-section">
            <div
              ref="charactersGrid"
              class="characters-grid"
              :class="{ 'waterfall-layout': isWaterfall }"
            >
              <div v-for="character in characters" :key="character.id" class="character-card">
                <div class="character-image-container">
                  <img
                    :src="character.imageUrl"
                    :alt="character.name"
                    class="character-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 class="character-name">{{ character.name }}</h3>
                <p class="character-description">{{ character.description }}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>

    <!-- 底部板块 -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

// 角色数据
const characters = ref([
  {
    id: 1,
    name: 'Trippi Troppi',
    imageUrl: '/images/brainrot/brainrot_01.webp',
    description: 'The classic Italian meme character',
  },
  {
    id: 2,
    name: 'Cappuccino Assassino',
    imageUrl: '/images/brainrot/brainrot_02.webp',
    description: 'A deadly coffee assassin with a mysterious past',
  },
  {
    id: 3,
    name: 'Burbaloni Lulliloli',
    imageUrl: '/images/brainrot/brainrot_03.webp',
    description: 'The bubble master of chaos',
  },
  {
    id: 4,
    name: 'Chimpanzini Bananini',
    imageUrl: '/images/brainrot/brainrot_04.webp',
    description: 'A monkey with a banana obsession',
  },
  {
    id: 5,
    name: 'Boneca Ambalabu',
    imageUrl: '/images/brainrot/brainrot_05.webp',
    description: 'The dancing doll that never stops',
  },
  {
    id: 6,
    name: 'Frigo Camelo',
    imageUrl: '/images/brainrot/brainrot_06.webp',
    description: 'A fridge with camel legs, because why not?',
  },
  {
    id: 7,
    name: 'Lirili Larilà',
    imageUrl: '/images/brainrot/brainrot_07.webp',
    description: 'The musical maestro of nonsense',
  },
  {
    id: 8,
    name: 'La Vaca Saturno Saturnita',
    imageUrl: '/images/brainrot/brainrot_08.webp',
    description: 'A cosmic cow from the depths of space',
  },
  {
    id: 9,
    name: 'Tung Tung Tung Sahu',
    imageUrl: '/images/brainrot/brainrot_09.webp',
    description: 'The rhythmic percussion master',
  },
  {
    id: 10,
    name: 'Bombardiro crocodilo',
    imageUrl: '/images/brainrot/brainrot_10.webp',
    description: 'A crocodile bomber pilot with attitude',
  },
  {
    id: 11,
    name: 'Brr Brr Patapim',
    imageUrl: '/images/brainrot/brainrot_11.webp',
    description: 'The cold warrior with a heart of ice',
  },
  {
    id: 12,
    name: 'Ballerina Cappuccina',
    imageUrl: '/images/brainrot/brainrot_12.webp',
    description: 'A graceful dancer with coffee powers',
  },
  {
    id: 13,
    name: 'Glorbo Fruttodrillo',
    imageUrl: '/images/brainrot/brainrot_13.webp',
    description: 'The fruit drill master of the jungle',
  },
  {
    id: 14,
    name: 'Matteooooooo',
    imageUrl: '/images/brainrot/brainrot_14.webp',
    description: 'The eternal screamer',
  },
  {
    id: 15,
    name: 'U Din Din Din Din Dun Ma Din Din Din Dun',
    imageUrl: '/images/brainrot/brainrot_15.webp',
    description: 'The longest name in the brainrot universe',
  },
  {
    id: 16,
    name: 'Trulimero Trulicina',
    imageUrl: '/images/brainrot/brainrot_16.webp',
    description: 'The mysterious twin of chaos',
  },
  {
    id: 17,
    name: 'Garamararambraramanmararaman dan Madudungdung tak tuntung perkuntung',
    imageUrl: '/images/brainrot/brainrot_17.webp',
    description: 'The Indonesian brainrot legend with the longest name ever created',
  },
  {
    id: 18,
    name: 'Pipi Potato',
    imageUrl: '/images/brainrot/brainrot_18.webp',
    description: 'A potato with eyes that follow you',
  },
  {
    id: 19,
    name: 'Ta Ta Ta Ta Ta Ta Ta Sahur',
    imageUrl: '/images/brainrot/brainrot_19.webp',
    description: 'The repetitive rhythm master',
  },
  {
    id: 20,
    name: 'Pot Hotspot',
    imageUrl: '/images/brainrot/brainrot_20.webp',
    description: 'A pot that provides internet connection',
  },
  {
    id: 21,
    name: 'Tralalero Tralala',
    imageUrl: '/images/brainrot/brainrot_21.webp',
    description: 'The singing sensation of the brainrot world',
  },
  {
    id: 22,
    name: 'Bananitta Dolfinitta',
    imageUrl: '/images/brainrot/brainrot_22.webp',
    description: 'A banana dolphin hybrid from the depths',
  },
  {
    id: 23,
    name: "Bantalero Bobo'o",
    imageUrl: '/images/brainrot/brainrot_23.webp',
    description: 'The pillow warrior with a soft heart',
  },
  {
    id: 24,
    name: 'El Eaglo Bomberolo',
    imageUrl: '/images/brainrot/brainrot_24.webp',
    description: 'An eagle bomber pilot with precision targeting',
  },
])

// 瀑布流相关
const charactersGrid = ref(null)
const isWaterfall = ref(true)

onMounted(() => {
  // 默认启用瀑布流布局
  isWaterfall.value = true
})
</script>

<style scoped>
.page-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  transition: all 0.3s ease;
}

.characters-grid.waterfall-layout {
  display: block;
  column-count: 8;
  column-gap: 1rem;
  break-inside: avoid;
}

.characters-grid.waterfall-layout .character-card {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  break-inside: avoid;
  page-break-inside: avoid;
}

.character-card {
  background: var(--color-card-bg);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid;
  border-image: linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef) 1;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.1);
}

.character-card:hover {
  transform: translateY(-6px);
  border-image: linear-gradient(135deg, #8b5cf6, #d946ef, #ec4899) 1;
  box-shadow: 0 15px 35px rgba(139, 92, 246, 0.25);
}

.character-image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 0.5rem;
}

.character-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.character-card:hover .character-image {
  transform: scale(1.05);
}

.character-name {
  padding: 0.2rem 0;
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: #e2e8f0;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.character-description {
  padding: 0.5rem 0;
  margin: 0;
  font-size: 0.7rem;
  color: #94a3b8;
  line-height: 1.4;
  font-style: italic;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
  }

  .characters-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .characters-grid.waterfall-layout {
    display: block;
    column-count: 4;
  }

  .character-name {
    font-size: 0.8rem;
    padding: 0.4rem 0;
  }

  .character-card {
    padding: 0.8rem;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .characters-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }

  .characters-grid.waterfall-layout {
    display: block;
    column-count: 3;
  }

  .character-name {
    font-size: 0.75rem;
    padding: 0.3rem 0;
  }

  .character-card {
    padding: 0.6rem;
  }
}

@media (max-width: 480px) {
  .characters-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .characters-grid.waterfall-layout {
    display: block;
    column-count: 2;
  }
}
</style> 