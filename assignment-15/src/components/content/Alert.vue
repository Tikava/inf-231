<template>
    <div class="alert" :class="typeClasses">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'info',
            validator: value => ['info', 'success', 'warning', 'danger'].includes(value),
        },
    },
    computed: {
        typeClasses() {
            return {
                'alert-info': this.type === 'info',
                'alert-success': this.type === 'success',
                'alert-warning': this.type === 'warning',
                'alert-danger': this.type === 'danger',
            };
        },
    },
};
</script>
  
<style scoped>
.alert {
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
}

.alert-info {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.alert-success {
    background-color: #d1e7dd;
    color: #0f5132;
    border: 1px solid #badbcc;
}

.alert-warning {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
}

.alert-danger {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}
</style>
  