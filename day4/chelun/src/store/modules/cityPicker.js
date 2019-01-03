import { cityList, constList } from '../../api/index'

const state = {
    cityList: [],
    costList: [],
    city: ['请选择签发地'],
    cost: []
}

const mutations = {
    updateState(state, action) {
        console.log('mutations...', state.action)
        state = Object.assign(state, action);
    }
}

const actions = {
    async getCityList({ commit }) {
        let res = await cityList();
        res.data.forEach(item => {
            item.list.forEach(value => {
                delete value.list;
            })
        })
        commit('updateState', { cityList: res.data })
        console.log('res...', res);
    },
    async getCostList({}) {

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}