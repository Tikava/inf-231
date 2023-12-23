<template>
    <div class="tags">
        <span v-for="(tag, index) in tags" :key="index" class="tag" @click="selectTag(tag)">
            {{ tag }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'MyTags',
    props: {
        tags: {
            type: Array,
            required: true,
        },
    },
    methods: {
        selectTag(tag) {
            this.$emit('select', tag);
        },
    },
};
</script>
  
<style scoped>

.tag {
    display: inline-block;
    padding: 5px 10px;
    background-color: #eaeaea;
    border-radius: 15px;
    margin-right: 5px;
    cursor: pointer;
}
</style>