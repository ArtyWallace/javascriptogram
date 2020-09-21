<template>
    <div class="main-layout">
        <Navbar />
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'main-layout',
    components: {
        Navbar
    },
    async mounted() {
        if (!Object.keys(this.$store.getters.info).length) {
            await this.$store.dispatch('getUserInfo');
        }
    }
}
</script>