<template>
    <div class="link-groups">
        <div v-for="(group, index) in groups" :key="index" class="link-group">
            <h4 class="group-title">{{ group.title }}</h4>
            <ul>
                <li v-for="(link, linkIndex) in group.links" :key="linkIndex">
                    <a :href="link.url">{{ link.label }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'LinkGroups',
    props: {
        groups: {
            type: Array,
            required: true,
        },
    },
};
</script>
  
<style scoped>

.link-group {
    margin-bottom: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 5px;
}

a {
    text-decoration: none;
    color: #333;
}
</style>