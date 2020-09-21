<template>
    <div class="register-page">
        <h1>Регистрация</h1>
        <form @submit.prevent="submitHandler">
            <input 
                type="text" 
                placeholder="Введите имя.." 
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
            <input 
                type="text" 
                placeholder="Введите имя.." 
                v-model="name"
            >
            <small class="error" v-if="$v.name.$dirty && !$v.name.required">Это обязательное поле!</small>
            <small class="error" v-else-if="$v.name.$dirty && !$v.name.minLength">Имя должно содержать 3 символа!</small>
            <input type="submit" class="btn">
        </form>
        <span>Уже зарегистрированы?</span>
        <router-link to="/login">К авторизации</router-link>
    </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
    name: 'Register',
    data: () => ({
        email: '',
        password: '',
        name: ''
    }),
    validations: {
        email: { required, email },
        password: { required, minLength: minLength(6) },
        name: { required, minLength: minLength(3) }
    },
     methods: {
         async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }

            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            };
            try {
                await this.$store.dispatch('register', formData);
                this.$router.push('/login');
            } catch (err) {}
         }
     }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/variables.scss';
    @import '@/assets/form.scss';

    .register-page {
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