<template>
    <input :type="type" :placeholder="placeholder" :value="value" @input="updateValue">
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "email",
        },        
        placeholder: String,
        value: String,
    },
    methods: {
        updateValue(event) {
            this.$emit("update:value", event.target.value);
        },
    },
}
</script>

<style scoped>

</style>