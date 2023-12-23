<template>
    <button @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
    props: {
        label: String,
    },
    methods: {
        handleClick() {
            this.$emit("click");
        },
    },
};
</script>
