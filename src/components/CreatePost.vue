<template>
    <form @submit.prevent="submitHandler">
        <input type="text" v-model="title">
        <input type="text" v-model="text">
        <input type="submit">
    </form>
</template>

<script>
export default {
    name: 'CareatePost',
    data: () => ({
        title: '',
        text: ''
    }),
    methods: {
        async submitHandler() {
            await this.$store.dispatch('createPost', {
                title: this.title,
                text: this.text
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>