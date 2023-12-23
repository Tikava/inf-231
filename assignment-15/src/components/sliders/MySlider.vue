<template>
    <input type="range" :min="min" :max="max" :value="value" @input="updateValue" />
</template>

<script>
export default {
    props: {
        min: Number,
        max: Number,
        value: Number,
    },
    methods: {
        updateValue(event) {
            this.$emit("update:value", event.target.value);
        },
    },
};
</script>
