<template>
  <div class="container">
      <div class="row">
        <div class="col-12">
            <div class="content-white gallary-page">
                <div class="image-grid">
                    <div class="image" v-for="(image, index) in imagePaths" :key="index">
                        <!-- 顯示圖片 -->
                        <img :src="image" :alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'watercolorPage',
    data() {
        return {
            imagePaths: []
        }
    },
    mounted() {
        const images = require.context('@/assets/artworks/watercolor', false, /\.(png|jpe?g|gif|svg)$/);
        this.imagePaths = images.keys().map(key => images(key));
    }
}
</script>
<style scoped>
.gallary-page {
    font-family: 'Nanum Gothic';
}

.content-main {
    padding: 20px;
}

.content-white {
    background-color: rgba(250, 250, 250, 0.65);
    min-height: 500px;
}

.image-grid {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
}

@media (max-width: 768px) {
    .image-grid {
        grid-template-columns: repeat(3, 1fr);
        padding: 10px;
        grid-gap: 10px;
    }
}

.image {
    width: 100%;
}

img {
    width: 100%;
    height: auto;
}

</style>
