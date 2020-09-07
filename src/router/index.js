import Vue from "vue";
import VueRouter from "vue-router";
import configRouters from "./module/index.js";
import commonRouters from "./common.js";

Vue.use(VueRouter);
const routes = configRouters.concat(commonRouters);


const router = new VueRouter({
  model: 'hash', //模式为hash或者是history,history需要后端的支持
  routes //这种写法为间写或者用下面的写法
  // routes: configRouters.concat(commonRouters),
  // scrollBehavior(to, from, savedPosition){
  //   if(to.hash){
  //     return{
  //       selector: to.hash,
  //       offset: {x: 0, y: 0}
  //     }
  //   }
  // }
});
// //导航守卫，可以做拦截器
// router.beforeEach((to, from, next) => {
//   //代码处理逻辑
//    next(); //必须要写的
// })

// //导航守卫，可以做拦截器
// router.afterEach((to, from) => {
//    //代码处理逻辑
// })

export default router;
