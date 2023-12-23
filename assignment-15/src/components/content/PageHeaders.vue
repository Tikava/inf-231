<template>
    <header class="page-header">
        <h1>{{ title }}</h1>
        <p v-if="subtitle">{{ subtitle }}</p>
    </header>
</template>
  
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            default: '',
        },
    },
};
</script>
  
<style scoped>
.page-header {
    background-color: #f7f7f7;
    padding: 16px;
    margin-bottom: 16px;
}

h1 {
    margin: 0;
    font-size: 24px;
}

p {
    margin: 8px 0 0;
    font-size: 16px;
    color: #666;
}
</style>
  