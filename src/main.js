import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toaster from 'v-toaster';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import 'v-toaster/dist/v-toaster.css';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Toaster, { timeout: 3000 });
Vue.use(Vuelidate);

firebase.initializeApp({
  apiKey: "AIzaSyA-6lv2TwgMvUsj7c80qmU8ZcJujaHEtMw",
  authDomain: "javascriptogram.firebaseapp.com",
  databaseURL: "https://javascriptogram.firebaseio.com",
  projectId: "javascriptogram",
  storageBucket: "javascriptogram.appspot.com",
  messagingSenderId: "985464858525",
  appId: "1:985464858525:web:b7ece341daacdfe849b174"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});