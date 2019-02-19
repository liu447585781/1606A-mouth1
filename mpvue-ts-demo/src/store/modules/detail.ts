import {getDetail,getComments} from '@/data/index'

const state={
    content:[],
    info:{},
    comment:[],
    comment_count:0,
    current:1
}

const mutations={
    updateState(state,info){
        state=Object.assign(state,info)
    }
}

const actions={
    async getDetail({commit},id){
        let data=await getDetail(id);
        console.log('data...', data);
        commit('updateState',{
            comment_count:data.data.comment_count,
            content:data.data.content,
            info:data.data
        })
    },
    async getComments({commit,state},{id,page}){
        let data=await getComments(id,(page-1)*20);
        console.log('data...', data, state.comment);
        commit('updateState',{
            comment:page==1?data.data:[...state.comment,...data.data]
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}