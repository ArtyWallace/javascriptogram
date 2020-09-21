<template>
    <div class="main">
        <Users />
        <Posts />
    </div>
</template>

<script>
import Users from './Users';
import Posts from './Posts';

export default {
    name: 'Main',
    components: {
        Users, Posts
    }
}
</script>

<style lang="scss" scoped>
    .main {
        width: 65%;
        margin-top: 100px;
    }
</style>