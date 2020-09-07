import Vue from "vue";
import Vuex from "vuex";

const files = require.context('./module', true, /\.js$/);
let modules = {};

//把所有的文件夹抽成module并暴露出去
files.keys().forEach(key => {
  let item = {};
  let filterKey = key.substring('./'.length, key.lastIndexOf('.js')); //截取文件的名字
  item[filterKey] = files(key).default;
  Object.assign(modules, item);
});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
});

window._store = store;

export default store;
