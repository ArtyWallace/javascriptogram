import firebase from 'firebase/app';

export default {
    state: {
        info: {}
    },
    mutations: {
        setUserInfo(state, info) {
            state.info = info;
        },
        clearUserInfo(state) {
            state.info = {};
        }
    },
    actions: {
        async getUserInfo({ dispatch, commit }) {
            try {
                const id = await dispatch('getId');
                const info = (await firebase.database().ref(`/users/${id}/info`).once('value')).val();
                commit('setUserInfo', info);
            } catch (err) {
                throw err;
            }
        }
    },
    getters: {
        info: s => s.info
    }
};