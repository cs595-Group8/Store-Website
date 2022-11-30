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
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}