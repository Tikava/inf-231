<template>
    <div class="modal" v-if="visible" @click.self="closeModal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        openModal() {
            this.visible = true;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.visible = false;
            document.body.style.overflow = '';
        },
    },
};
</script>
  
<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.modal-content {
    background-color: #fff;
    padding: 16px;
    border-radius: 4px;
    position: relative;
}

.close {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 24px;
    cursor: pointer;
}
</style>
  