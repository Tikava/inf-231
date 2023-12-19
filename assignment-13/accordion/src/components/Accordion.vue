<template>
    <div id="accordion">
        <div v-for="(item, index) in items" :key="index" class="accordion-item">
            <div class="accordion-title" @click="toggle(index)">
                {{ item.title }}
                <span class="icon">{{ item.expanded ? '-' : '+' }}</span>
            </div>
            <div v-if="item.expanded" class="accordion-content">
                <slot :name="item.name"></slot>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        toggle(index) {
            this.items[index].expanded = !this.items[index].expanded;
        }
    }
}
</script>
  
<style scoped>
.accordion-title {
    cursor: pointer;
}

.accordion-content {
    overflow: hidden;
    transition: max-height 0.6s ease;
}

.icon {
    float: right;
}
</style>
  