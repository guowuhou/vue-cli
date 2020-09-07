import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Iview from 'iview'; //引入ui组件iview
// import './view/_css/common.scss'; //引入公用的css样式文件
// Vue.use(Iivew);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
