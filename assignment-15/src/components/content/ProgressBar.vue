<template>
    <div class="progress-bar">
        <div :style="{ width: progress + '%' }"></div>
    </div>
</template>
  
<script>
export default {
    props: {
        progress: {
            type: Number,
            default: 0,
        },
    },
};
</script>
  
<style scoped>
.progress-bar {
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
}

.progress-bar div {
    height: 100%;
    background-color: #007bff;
    border-radius: 4px;
    transition: width 0.3s ease-in-out;
}
</style>
  