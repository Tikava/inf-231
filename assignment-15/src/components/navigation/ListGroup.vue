<template>
    <div class="list-group">
        <ul>
            <li v-for="(item, index) in items" :key="index" class="list-group-item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'ListGroup',
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.list-group ul {
    list-style: none;
    padding: 0;
}

.list-group-item {
    padding: 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
}
</style>
  