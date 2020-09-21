<template>
    <div class="login-page">
        <h1>Авторизация</h1>
        <form @submit.prevent="submitHandler">
            <input 
                type="text" 
                placeholder="Введите е-мэйл.." 
                v-model="email"
            >
            <small class="error" v-if="$v.email.$dirty && !$v.email.required">Это обязательное поле!</small>
            <small class="error" v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный е-мэйл</small>
            <input 
                type="password" 
                placeholder="Введите пароль.." 
                v-model="password"
            >
            <small class="error" v-if="$v.password.$dirty && !$v.password.required">Это обязательное поле!</small>
            <small class="error" v-else-if="$v.password.$dirty && !$v.password.minLength">Пароль должен содержать 6 символов!</small>
            <input type="submit" class="btn">
        </form>
        <span>Нет учетной записи?</span>
        <router-link to="/register">Регистрация</router-link>
    </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
    name: 'Login',
    data: () => ({
        email: '',
        password: ''
    }),
    validations: {
        email: { required, email },
        password: { required, minLength: minLength(6) }
    },
    methods: {
        async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }

            const formData = {
                email: this.email,
                password: this.password
            };

            try {
                await this.$store.dispatch('login', formData);
                this.$router.push('/');
            } catch (err) {}
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/variables.scss';
    @import '@/assets/form.scss';

    .login-page {
        display: flex;
        align-items: center;
        flex-direction: column;

        & span {
            color: gray;
        }

        & a {
            font-size: 20px;
            color:  rgba(33, 194, 206, .7);
            transition: color .3s ease-in;

            &:hover {
                color: rgba(33, 194, 206, 1);
            }
        }
    }
</style>