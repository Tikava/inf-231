<template>
    <img :src="source" :alt="altText" :style="{ width: width, height: height }">
</template>
  
<script>
export default {
    name: 'MyImage',
    props: {
        source: {
            type: String,
            required: true,
        },
        altText: {
            type: String,
            default: '',
        },
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: 'auto',
        },
    },
};
</script>
