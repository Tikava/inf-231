<template>
    <p :class="textClass">
        <slot></slot>
    </p>
</template>
  
<script>
export default {
    name: 'MyText',
    props: {
        variant: {
            type: String,
            default: 'body',
            validator: (value) => ['body', 'title', 'subtitle', 'caption'].includes(value),
        },
    },
    computed: {
        textClass() {
            return `text-${this.variant}`;
        },
    },
};
</script>
  
<style scoped>
.text-body {
    font-size: 16px;
    line-height: 1.5;
    font-weight: normal;
}

.text-title {
    font-size: 24px;
    line-height: 1.2;
    font-weight: bold;
}

.text-subtitle {
    font-size: 18px;
    line-height: 1.3;
    font-weight: normal;
}

.text-caption {
    font-size: 14px;
    line-height: 1.4;
    font-weight: normal;
}
</style>
  