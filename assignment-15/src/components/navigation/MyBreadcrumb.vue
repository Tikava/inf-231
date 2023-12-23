<template>
    <nav class="breadcrumb">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <a @click="navigate(item)">{{ item }}</a>
                <span v-if="index < items.length - 1"> / </span>
            </li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    name: 'MyBreadcrumb',
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    methods: {
        navigate(item) {
            this.$emit('navigate', item);
        },
    },
};
</script>  