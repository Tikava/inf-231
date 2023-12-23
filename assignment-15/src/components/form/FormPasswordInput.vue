<template>
    <input :type="type" :placeholder="placeholder" :value="value" @input="updateValue" />
</template>

<script>
export default {
    props: {
        placeholder: String,
        value: String,
    },
    data() {
        return {
            type: "password",
        };
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
