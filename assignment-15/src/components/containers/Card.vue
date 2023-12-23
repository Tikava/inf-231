<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
};
</script>
  
<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
  