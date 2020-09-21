import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import userInfo from './userInfo';
import userPosts from './userPosts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth,
    userInfo,
    userPosts
  }
});