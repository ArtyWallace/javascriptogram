<template>
    <div>
        <ProfileHeader />
        <ProfilePosts />
        <CreatePost />
    </div>
</template>

<script>
import ProfileHeader from '@/components/ProfileHeader.vue';
import ProfilePosts from '@/components/ProfilePosts.vue';
import CreatePost from '@/components/CreatePost.vue';

export default {
    name: 'Profile',
    components: {
        ProfileHeader,
        ProfilePosts,
        CreatePost
    }
}
</script>