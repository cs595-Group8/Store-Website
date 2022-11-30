import { updateAccount } from "/src/persistance/database.js"

const state = {
    user: null
}

const mutations = {
    SET_USER(state, account) {
        state.user = account;
    }
}

const actions = {
    loginUser({commit}, account) {
        commit('SET_USER', account)
    },

    updateUser({dispach, commit}, user) {
        updateAccount(user.id, user.firstName, user.lastName, user.emailAddress, user.password)
        commit('SET_USER', user)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}