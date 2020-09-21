<template>
    <div class="profile__header">
        <img :src="avatar" :alt="name" class="header__photo">
        <div class="header__info">
            <span class="name">{{ name.toLowerCase() }}</span>
            <router-link to="/settings/profile-settings">
                <i class="far fa-cog"></i>
                <span>Редактировать профиль</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileHeader',
    data: () => ({
        name: '',
        avatar: ''
    }),
    mounted() {
        this.name = this.$store.getters.info.name;
        if (this.$store.getters.info.avatar) {
            this.avatar = this.$store.getters.info.avatar;
        }
        this.avatar = 'https://nop4you.com/Themes/QuickTemplate/Content/images/thumbs/no-avatar.png';
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

    .profile__header {
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        margin-bottom: 50px;

        & a {
            margin-left: 20px;
            border: 1px solid $border-color;
            padding: 10px;
            border-radius: 5px;

            display: flex;
            align-items: center;
        }

        & i {
            margin-right: 10px;
            font-size: 20px;
        }
    }

    .name {
        font-size: 25px;
    }

    .header__photo {
        width: 150px;
        border-radius: 50%;
    }

    .header__info {
        width: 65%;
        display: flex;
        align-items: center;
    }
</style>