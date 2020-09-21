import firebase from 'firebase/app';

export default {
    actions: {
        async login({ dispatch, commit }, { email, password }) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (err) {
                commit('setError', err.code);
                throw err;
            }
        },
        async register({ dispatch, commit }, { email, password, name }) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                const id = await dispatch('getId');
                await firebase.database().ref(`/users/${id}/info`).set({ name, avatar: '' });
            } catch (err) {
                commit('setError', err.code);
                throw err;
            }
        },
        getId() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        },
        async logout({ commit }) {
            await firebase.auth().signOut();
            await commit('clearUserInfo');
        }
    }
};