<template>
    <div v-show="active">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'MyTab',
    props: {
        label: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            active: false,
        };
    },
    created() {
        this.$parent.tabs.push(this);
    },
};
</script>
