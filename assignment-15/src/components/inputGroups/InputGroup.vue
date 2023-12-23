<template>
    <div class="input-groups">
        <div v-for="(input, index) in inputs" :key="index" class="input-group">
            <label :for="input.id">{{ input.label }}</label>
            <slot :name="input.id" :input="input"></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        inputs: {
            type: Array,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.input-groups {
    display: flex;
    flex-direction: column;
}

.input-group {
    margin-bottom: 16px;
}

label {
    display: block;
    margin-bottom: 8px;
}
</style>
  