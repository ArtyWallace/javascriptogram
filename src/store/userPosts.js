import firebase from 'firebase/app';

export default {
    actions: {
        async getUserPosts({ dispatch, commit }) {
            try {
                const id = await dispatch('getId');
                const posts = (await firebase.database().ref(`/users/${id}/posts`).once('value')).val() || {};
                return Object.keys(posts).map(key => ({ ...posts[key], id: key }));
            } catch (err) {
                throw err;
            }
        },
        async createPost({ dispatch, commit }, { title, text }) {
            const id = await dispatch('getId');
            const post = await firebase.database().ref(`/users/${id}/posts`).push({ title, text });
            return { title, text, id: post.key };
        }
    }
};