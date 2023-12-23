<template>
    <nav class="navigation-links">
        <ul>
            <li v-for="(link, index) in links" :key="index">
                <a :href="link.url" :class="{ active: link.active }">{{ link.label }}</a>
            </li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    name: 'NavLinks',
    props: {
        links: {
            type: Array,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.navigation-links ul {
    list-style: none;
    padding: 0;
}

.navigation-links li {
    display: inline-block;
    margin-right: 10px;
}

.navigation-links a {
    text-decoration: none;
    color: #333;
}

.navigation-links a.active {
    font-weight: bold;
}
</style>