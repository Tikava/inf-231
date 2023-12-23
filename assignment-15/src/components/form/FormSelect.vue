<template>
    <select :value="value" @change="updateValue">
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<script>
export default {
    props: {
        options: Array,
        value: String,
    },
    methods: {
        updateValue(event) {
            this.$emit("update:value", event.target.value);
        },
    },
};
</script>

<style scoped>
</style>
