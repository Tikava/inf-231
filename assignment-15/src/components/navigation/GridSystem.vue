<template>
    <div class="grid-container">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'GridSystem',
};
</script>
  
<style>
.grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.grid-item {
    width: 30%;
    margin-bottom: 20px;
    background-color: #f2f2f2;
    padding: 20px;
    box-sizing: border-box;
}

@media (max-width: 768px) {
    .grid-item {
        width: 45%;
    }
}

@media (max-width: 576px) {
    .grid-item {
        width: 100%;
    }
}
</style>
  