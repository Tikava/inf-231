<template>
    <div class="pagination">
        <ul>
            <li>
                <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            </li>
            <li v-for="pageNumber in totalPages" :key="pageNumber">
                <button @click="goToPage(pageNumber)" :class="{ active: pageNumber === currentPage }">{{ pageNumber
                }}</button>
            </li>
            <li>
                <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Pagination',
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.$emit('page-change', this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('page-change', this.currentPage + 1);
            }
        },
        goToPage(pageNumber) {
            if (pageNumber !== this.currentPage) {
                this.$emit('page-change', pageNumber);
            }
        },
    },
};
</script>