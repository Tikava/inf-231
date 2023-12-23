<template>
    <input type="radio" :checked="checked" @change="updateValue" />
</template>

<script>
export default {
    props: {
        checked: Boolean,
    },
    methods: {
        updateValue(event) {
            this.$emit("update:checked", event.target.checked);
        },
    },
};
</script>

<style scoped>
</style>
