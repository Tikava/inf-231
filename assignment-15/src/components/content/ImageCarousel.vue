<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div v-for="(image, index) in images" :key="index" :class="{ active: index === activeIndex }">
                <img :src="image.url" alt="Carousel Image" class="carousel-image" />
            </div>
        </div>

        <button class="carousel-control prev" @click="prevSlide">
            Previous
        </button>
        <button class="carousel-control next" @click="nextSlide">
            Next
        </button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            activeIndex: 0,
        };
    },
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
    methods: {
        prevSlide() {
            this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
        },
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.images.length;
        },
    },
};
</script>
  
<style scoped>
.carousel {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
}

.carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-inner>div {
    flex: 0 0 100%;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
}

.carousel-control.prev {
    left: 10px;
}

.carousel-control.next {
    right: 10px;
}
</style>
  