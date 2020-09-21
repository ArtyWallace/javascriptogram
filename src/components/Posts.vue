<template>
    <div class="posts">
        <Post 
            v-for="post in posts" 
            :key="post.id"
            :name="post.name"
            :pic="post.pic"
            :description="post.description"
        />
    </div>
</template>

<script>
import Post from './Post';

export default {
    name: 'Posts',
    components: {
        Post
    },
    data: () => ({
        posts: [
            { 
                id: 1, 
                name: 'John', 
                pic: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=4000&hei=2200&scl=1.84', 
                description: 'Test1' 
            },
            { 
                id: 2, 
                name: 'John', 
                pic: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=4000&hei=2200&scl=1.84', 
                description: 'Test1' 
            },
            { 
                id: 3, 
                name: 'John', 
                pic: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=4000&hei=2200&scl=1.84', 
                description: 'Test1' 
            },
            { 
                id: 4, 
                name: 'John', 
                pic: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=4000&hei=2200&scl=1.84', 
                description: 'Test1' 
            },
        ]
    })
}
</script>

<style lang="scss" scoped>
    .posts {
        animation: fade .3s ease-in;
    }

    @keyframes fade {
        0% {
            opacity: 0;
            transform: translateX(-300px);
        }

        50% {
            opacity: .5;
            transform: translateX(-150px);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>