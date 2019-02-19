import { getSetting, getFeed } from '@/data/index';

const state = {
    channels: [],
    newsList: [],
    hot_time: ''
}

const mutations = {
    //tab列表
    updateChannels(state, channels) {
        state.channels = channels;
    },
    //list列表
    updateNewsList(state, newsList) {
        state.newsList = newsList;
        state.hot_time = newsList.map(item => {
            return item.content.behot_time;
        }).sort((a, b) => b - a)[0];
    },
    //加载更多
    appendNewsList(state, newsList) {
        state.newsList = [...state.newsList, ...newsList];
        console.log(state.newsList.length)
        state.hot_time = newsList.map(item => {
            return item.content.behot_time;
        }).sort((a, b) => b - a)[0]
        console.log('hot_time...', state.hot_time)
    },
    //删除数据
    removeNews(state, id) {
        let index = state.newsList.findIndex(item => {
            return item.content.item_id == id
        })
        state.newsList.splice(index, 1)
    }
}

const actions = {
    async getSetting({ commit }) {
        let channels = await getSetting();
        commit('updateChannels', channels.channels[0])
    },
    async getFeed({ commit }, url) {
        let news = await getFeed(url);
        console.log('news...', news)
        news.data.forEach(item => {
            item.content = JSON.parse(item.content)
        })
        commit('updateNewsList', news.data)
    },
    async getMore({ commit, state }, url) {
        url += `&max_behot_time=${state.hot_time}`;
        let news = await getFeed(url);
        news.data.forEach(item => {
            item.content = JSON.parse(item.content)
        })
        commit('appendNewsList', news.data)
    }
}

export default {
    namespaced: true,
    mutations,
    state,
    actions
}