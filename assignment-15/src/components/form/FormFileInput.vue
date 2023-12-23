<template>
    <input type="file" @change="updateValue" />
</template>

<script>
export default {
    methods: {
        updateValue(event) {
            this.$emit("update:value", event.target.files[0]);
        },
    },
};
</script>

<style scoped>
</style>
