import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'empty' },
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main' },
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: { layout: 'main' },
    component: () => import('@/views/settings/Settings.vue'),
    children: [
      {
        path: 'profile-settings',
        meta: { layout: 'main' },
        component: () => import('@/views/settings/ProfileSettings.vue')
      },
      {
        path: 'password-settings',
        meta: { layout: 'main' },
        component: () => import('@/views/settings/PasswordSettings.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
