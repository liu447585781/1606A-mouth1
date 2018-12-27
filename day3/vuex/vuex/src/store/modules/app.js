const state = {
    num: 123
}

const mutations = {
    btn(state, { payload }) {
        state.num = payload == '+' ? state.num + 1 : state.num - 1;
    }
}

export default {
    state,
    mutations
}