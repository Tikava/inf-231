<template>
    <aside class="sidebar-menu">
        <ul>
            <li v-for="item in menuItems" :key="item.id">
                <router-link :to="item.link">{{ item.label }}</router-link>
            </li>
        </ul>
    </aside>
</template>
  
<script>
export default {
    props: {
        menuItems: {
            type: Array,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.sidebar-menu {
    background-color: #f0f0f0;
    padding: 16px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 8px;
}

a {
    text-decoration: none;
    color: #333;
}
</style>
  