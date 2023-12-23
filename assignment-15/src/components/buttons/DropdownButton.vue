<template>
    <div class="dropdown">
        <button class="dropbtn" @click="toggleDropdown">{{ label }}</button>
        <div class="dropdown-content" v-if="isDropdownOpen">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDropdownOpen: false,
        };
    },
    props: {
        label: String,
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
    },
};
</script>