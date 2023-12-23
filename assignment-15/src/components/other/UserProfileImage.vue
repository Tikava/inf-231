<template>
    <div class="user-profile-image">
        <img :src="profileImage" :alt="altText" :style="{ width: size, height: size, borderRadius: rounded ? '50%' : '0' }">
    </div>
</template>
  
<script>
export default {
    name: 'UserProfileImage',
    props: {
        profileImage: {
            type: String,
            required: true,
        },
        altText: {
            type: String,
            default: 'User Profile Image',
        },
        size: {
            type: String,
            default: '50px',
        },
        rounded: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
  
<style scoped>
.user-profile-image {
    display: inline-block;
}
</style>
  