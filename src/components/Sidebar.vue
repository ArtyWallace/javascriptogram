<template>
    <div class="sidebar">
        {{ name }}
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    computed: {
        name() {
            return this.$store.getters.info.name;
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    position: sticky;
    top: 100px;

    width: 30%;
    height: 400px;

    border: 1px solid #000;
}
</style>