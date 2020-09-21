<template>
    <div class="post">
        <div class="name">{{ name }}</div>
        <img :src="pic" alt="post-picture" class="pic">
        <div class="description"><strong>{{ name }}</strong> {{ description }}</div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: ['name', 'pic', 'description'],
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.post {
    width: 100%;
    border: 1px solid $border-color;
    background: #fff;

    margin-bottom: 40px;

    & div {
        padding: 15px;
    }
}

.pic {
    width: inherit;
}
</style>