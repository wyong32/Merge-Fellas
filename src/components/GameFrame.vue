<template>
  <div class="game-view-container">
    <div ref="gameAreaRef" class="game-frame-wrapper">
      <div class="game-container">
        <iframe
          :src="iframeSrc"
          frameborder="0"
          allow="autoplay; picture-in-picture"
          scrolling="no"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
    <div class="game-controls">
      <span class="game-title">{{ gameTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameFrame',
  props: {
    iframeSrc: {
      type: String,
      required: true,
    },
    gameTitle: {
      type: String,
      default: 'Merge Game',
    },
  },
}
</script>

<style scoped>
.game-view-container {
  display: flex;
  flex-direction: column;
  background: var(--color-card-bg);
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.game-frame-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000;
  border-radius: 12px;
  overflow: hidden;
}

.game-container {
  width: 100%;
  height: 100%;
}

.game-container iframe {
  border-radius: 12px;
}

.game-controls {
  display: flex;
  align-items: center;
  padding: 0.75rem 0 0 0;
}

.game-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-light);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .game-view-container {
    padding: 0.8rem;
  }

  .game-frame-wrapper {
    border-radius: 10px;
  }

  .game-container iframe {
    border-radius: 10px;
  }

  .game-title {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .game-view-container {
    padding: 0.6rem;
    border-radius: 12px;
  }

  .game-frame-wrapper {
    border-radius: 8px;
  }

  .game-container iframe {
    border-radius: 8px;
  }

  .game-controls {
    padding: 0.5rem 0 0 0;
  }

  .game-title {
    font-size: 0.9rem;
  }
}
</style> 