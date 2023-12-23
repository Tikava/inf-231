<template>
    <div class="button-group">
        <button v-for="button in buttons" :key="button.label" @click="handleClick(button.label)">
            {{ button.label }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        buttons: Array,
    },
    methods: {
        handleClick(label) {
            this.$emit("click", label);
        },
    },
};
</script>
