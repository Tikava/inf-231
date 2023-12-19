<template>
    <div class="carousel">
        <div class="carousel-item" v-for="(item, index) in items" :key="index" v-show="current === index">
            <img :src="item.src" :alt="item.alt">
            <div class="caption">{{ item.caption }}</div>
        </div>
        <button class="nav-button" @click="prev">Prev</button>
        <button class="nav-button" @click="next">Next</button>
    </div>
</template>
  
<script>
export default {
    props: ['items'],
    data() {
        return {
            current: 0,
            intervalId: null
        };
    },
    mounted() {
        this.startAutoplay();
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        next() {
            this.current = (this.current + 1) % this.items.length;
        },
        prev() {
            this.current = (this.current - 1 + this.items.length) % this.items.length;
        },
        startAutoplay() {
            this.intervalId = setInterval(this.next, 3000); // Change slides every 3 seconds
        }
    }
};
</script>