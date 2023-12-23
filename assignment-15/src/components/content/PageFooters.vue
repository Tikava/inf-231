<template>
    <footer class="page-footer">
        <p>{{ content }}</p>
    </footer>
</template>
  
<script>
export default {
    props: {
        content: {
            type: String,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.page-footer {
    background-color: #f7f7f7;
    padding: 16px;
    margin-top: 16px;
}

p {
    margin: 0;
    font-size: 14px;
    color: #666;
}
</style>
  