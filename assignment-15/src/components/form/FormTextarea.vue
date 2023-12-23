<template>
    <textarea :placeholder="placeholder" :value="value" @input="updateValue"></textarea>
</template>

<script>
export default {
    props: {
        placeholder: String,
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
