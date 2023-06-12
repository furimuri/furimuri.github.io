<template>
  <div>
    <transition-group name="fade">
      <div :key="index" v-for="(background, index) in imagePaths" :mode="mode">
        <img :src="background" class="background-image" :style="index === currentBackgroundIndex ? 'opacity: 0.3;' : ''" />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePaths: [],
      // backgrounds: [
      //   require('@/assets/creations/01.jpg'),
      //   require('@/assets/creations/02.jpg'),
      //   require('@/assets/creations/03.jpg'),
      //   require('@/assets/creations/04.jpg'),
      //   require('@/assets/creations/05.jpg'),
      //   require('@/assets/creations/06.jpg'),
      //   require('@/assets/creations/07.jpg'),
      //   require('@/assets/creations/08.jpg'),
      //   require('@/assets/creations/09.jpg'),
      //   require('@/assets/creations/10.jpg')
      // ],
      currentBackgroundIndex: Math.floor(Math.random() * 10) + 1,
      intervalId: null,
      mode: "out-in"
    }
  },
  mounted() {
    const images = require.context('@/assets/creations', false, /\.(png|jpe?g|gif|svg)$/);
    this.imagePaths = images.keys().map(key => images(key));
    this.intervalId = setInterval(this.nextBackground, 5000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    nextBackground() {
      this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.imagePaths.length;
    }
  }
}
</script>

<style scoped>
.background-image {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;                    
  opacity: 0;
  transition: opacity 3s ease-in-out;
}
</style>
