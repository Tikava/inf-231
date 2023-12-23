<template>
    <input type="number" :placeholder="placeholder" :value="value" @input="updateValue" />
</template>

<script>
export default {
    props: {
        placeholder: String,
        value: Number,
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
