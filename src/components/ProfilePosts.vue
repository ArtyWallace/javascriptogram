<template>
    <div class="user__posts">
        <div v-for="post of posts" :key="post.id" class="post">
            <div class="post__title">{{ post.title }}</div>
            <div class="post__text">{{ post.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePosts',
    data: () => ({
        posts: []
    }),
    async mounted() {
        this.posts = await this.$store.dispatch('getUserPosts');
    }
}
</script>