<template>
    <div class="settings">
        <div class="settings__links">
            <div class="link">
                <router-link to="/settings/profile-settings" exact active-class="active">
                    Редактировать профиль
                </router-link>
            </div>
            <div class="link">
                <router-link to="/settings/password-settings" active-class="active">
                    Изменить пароль
                </router-link>
            </div>
        </div>
        <div class="settings__info">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.settings {
    width: 100%;
    height: 500px;
    margin-top: 100px;

    background: #fff;
    border: 1px solid $border-color;

    display: flex;
    justify-content: space-between;
}

.settings__links {
    width: 30%;
    border-right: 1px solid $border-color;
}

.link {
    padding: 20px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: none;
        z-index: 100;
    }

    &:hover::before {
        background: #ccc;
    }
}

.active {
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: #000;
        z-index: 100;
    }
}
</style>