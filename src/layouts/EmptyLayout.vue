<template>
    <div class="empty-layout">
        <router-view/>
    </div>
</template>

<script>
import messages from '@/utils/messages';

export default {
    name: 'empty-layout',
    computed: {
        error() {
            return this.$store.getters.error;
        }
    },
    watch: {
        error(fbError) {
            this.$toaster.warning(messages[fbError] || 'Что-то пошло не так!');
        }
    }
}
</script>

<style lang="scss" scoped>
.empty-layout {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>