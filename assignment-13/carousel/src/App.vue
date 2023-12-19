<template>
  <div id="app">
    <h1>My Carousel App</h1>
    <Carousel :items="carouselItems" />
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue';

export default {
  name: 'App',
  components: {
    Carousel,
  },
  data() {
    return {
      carouselItems: [
        { src: 'path/to/image1.jpg', alt: 'Image 1', caption: 'Caption 1' },
        { src: 'path/to/image2.jpg', alt: 'Image 2', caption: 'Caption 2' },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}
</style>
