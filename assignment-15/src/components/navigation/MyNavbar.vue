<template>
    <nav>
        <ul>
            <li v-for="(link, index) in links" :key="index">
                <a @click="handleClick(link)">{{ link.label }}</a>
            </li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    props: {
        links: Array,
    },
    methods: {
        handleClick(link) {
            this.$emit("nav-click", link);
        },
    },
};
</script>
  