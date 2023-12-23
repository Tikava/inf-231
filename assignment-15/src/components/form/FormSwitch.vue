<template>
    <label class="switch">
        <input type="checkbox" :checked="checked" @change="updateValue">
        <span class="slider"></span>
    </label>
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
