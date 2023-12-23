<template>
    <div class="message-box">
        <div class="header">
            {{ title }}
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        title: String,
    },
};
</script>
  
<style scoped>
.message-box {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    margin: 16px 0;
}

.header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}
</style>
  