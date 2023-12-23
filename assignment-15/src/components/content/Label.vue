<template>
  <span class="label">
    <slot></slot>
  </span>
</template>
  
<script>
export default {
};
</script>
  
<style scoped>
.label {
  display: inline-block;
  padding: 4px 8px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
}
</style>
  