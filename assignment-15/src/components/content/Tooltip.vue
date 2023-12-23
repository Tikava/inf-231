<template>
  <div class="tooltip" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot></slot>
    <div v-if="visible" class="tooltip-text">{{ content }}</div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  props: {
    content: String,
  },
  methods: {
    showTooltip() {
      this.visible = true;
    },
    hideTooltip() {
      this.visible = false;
    },
  },
};
</script>
  
<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.tooltip:hover .tooltip-text {
  opacity: 1;
}
</style>
  