<template>
    <i :class="iconClass"></i>
</template>

<script>
export default {
    props: {
        name: String,
    },
    computed: {
        iconClass() {
            return `icon-${this.name}`;
        },
    },
};
</script>

<style scoped>
</style>