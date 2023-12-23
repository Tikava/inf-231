<template>
    <div class="search-bars">
        <input type="text" v-model="searchText" :placeholder="placeholder" />
        <button @click="search">Search</button>
    </div>
</template>
  
<script>
export default {
    name: 'SearchBars',
    props: {
        placeholder: {
            type: String,
            default: 'Search...',
        },
    },
    data() {
        return {
            searchText: '',
        };
    },
    methods: {
        search() {
            this.$emit('search', this.searchText);
        },
    },
};
</script>