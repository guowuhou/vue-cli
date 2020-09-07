import {generateAutoAction} from "../../common/utils.js"
import {queryListApi, queryListDetailApi} from "../../network/factory.js"

let proxyApi = {
    queryListDetailApi
};

const state ={
    queryList: [{a: 1, b:2}, {c: 3, d:4}],
    totalSize: 999
};

const actions = {
    getQueryListAction: ({commit}, payload) => {
        queryListApi(payload.data.id).then((data) => {
            let result = [];
            if(data.data){
                result = data.data;
            };
            commit('GET_QUERY_LIST', {ret: result || {}});
            payload.cb && payload.cb();
        }).catch((err) => {
            console.log(err);
        })
    }
};

//抽成一个公用的方法，避免在action里面写太多的方法,如在组件里调用this.queryListDetailAction方法，就是调用queryListDetailApi
generateAutoAction(actions, proxyApi); 

const mutations = {
    GET_QUERY_LIST: (state, {ret}) => {
        state.queryList = ret.data.prdlist || [];
        state.totalSize = ret.data.totalSize || 0;
    }
}

const getters = {
    getQueryListResult: (state) => {
        return state.queryList;
    },
    getQueryListTotal: (state) => {
        return state.totalSize;
    }
}

export default {
    namespaced: true,  //命名空间，用于多模块的组合应用
    state,
    actions,
    mutations,
    getters
}