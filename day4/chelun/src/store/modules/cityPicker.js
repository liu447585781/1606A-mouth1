import { cityList, costList } from '../../api/index'

const state = {
    cityList: [],
    costList: [],
    city: ['请选择签发地'],
    cost: ['请选择补换地']
}

const mutations = {
    updateState(state, action) {
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
    },
    async getCostList({ commit, state }, action) {
        let proIndex = state.cityList.findIndex(item => item.name == state.city[0]),
            cityIndex = state.cityList[proIndex].list.findIndex(item => item.name == state.city[1]);
        let res = await costList(1, state.cityList[proIndex].id, state.cityList[proIndex].list[cityIndex].id);
        commit('updateState', { costList: res.data })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}