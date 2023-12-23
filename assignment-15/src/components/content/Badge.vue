<template>
    <span class="badge">
        <slot></slot>
    </span>
</template>
  
<script>
export default {
};
</script>
  
<style scoped>
.badge {
    display: inline-block;
    padding: 4px 8px;
    background-color: #007bff;
    color: #fff;
    border-radius: 12px;
}
</style>
  