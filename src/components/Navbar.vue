<template>
    <div class="header">
        <div class="container">
            <div class="header__inner">
                <router-link to="/">
                    <div class="logo">JavascriptoGram</div>
                </router-link>
                <input type="text" class="search" placeholder="Поиск">
                <nav>
                    <router-link to="/">
                        <i class="fal fa-home-lg-alt"></i>
                    </router-link>
                    <router-link to="/direct">
                        <i class="fal fa-paper-plane"></i>
                    </router-link>
                    <!-- КОСТЫЛИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1 -->
                    <div class="profile" @mouseover="openDropdown" @mouseout="closeDropdown">{{ name }}</div>
                    <div class="dropdown" v-show="showDropdown" @mouseover="openDropdown" @mouseout="closeDropdown">
                        <router-link to="/profile">Профиль</router-link>
                        <a href="#" @click.prevent="logoutHandler">Выйти</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data: () => ({
        showDropdown: false

    }),
    computed: {
        name() {
            return this.$store.getters.info.name;
        }
    },
    methods: {
        async logoutHandler() {
            await this.$store.dispatch('logout');
            this.$router.push('/login');
        },
        openDropdown() {
            this.showDropdown = true;
        },
        closeDropdown() {
            this.showDropdown = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.header {
    width: 100%;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid $border-color;

    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

}

.header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    & nav {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & i {
            font-size: 25px;
        }
    }
}

.logo {
    font-family: 'Pacifico', cursive;
    font-size: 30px;
}

.search {
    outline: none;
    padding: 5px;
    border: 1px solid $border-color;
    border-radius: 5px;
    text-align: center;
    background: #eee;

    &:focus {
        text-align: left;
    }
}

.profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid $border-color;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    cursor: pointer;
}

.dropdown {
    position: absolute;
    right: 0;
    bottom: -150%;

    width: 200px;
    display: flex;
    flex-direction: column;

    border: 1px solid $border-color;
    border-radius: 10px;
    box-shadow: 2px 2px 0 0 #ccc;
    background: #fff;

    animation: fade .3s ease-in;

    & a {
        padding: 15px;
        transition: background .3s ease-in;
    }

    & a:last-child {
        border-top: 1px solid $border-color;
    }

    & a:hover {
        background: #eee;
    }
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}
</style>