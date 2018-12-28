const state = {
    num: 123
}

const mutations = {
    btn(state, { payload }) {
        state.num = payload == '+' ? state.num + 1 : state.num - 1;
    }
}

const actions = {
    btns({ commit }, action) {
        // console.log('context....', context, action);
        setTimeout(() => {
            commit('btn', action)
        }, 1000)

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}