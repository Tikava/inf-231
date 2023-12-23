<template>
    <input type="datetime-local" :value="value" @input="updateValue" />
</template>

<script>
export default {
    props: {
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
