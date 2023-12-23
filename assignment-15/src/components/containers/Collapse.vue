<template>
    <div class="collapse">
        <div class="collapse-header" @click="toggleCollapse">
            {{ header }}
        </div>
        <div v-if="open" class="collapse-content">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        header: String,
    },
    data() {
        return {
            open: false,
        };
    },
    methods: {
        toggleCollapse() {
            this.open = !this.open;
        },
    },
};
</script>
  
<style scoped>
.collapse {
    margin-bottom: 8px;
}

.collapse-header {
    cursor: pointer;
    padding: 8px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.collapse-content {
    padding: 8px;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
}
</style>
  