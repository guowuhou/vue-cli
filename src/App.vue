<template>
  <div id="app">
    <!--<Home />-->
    <h1>{{message}}</h1>
    <div id="nav">
      <router-link to="/">home</router-link> |
      <router-link to="/shop">shop</router-link> |
      <router-link to="/about">about</router-link> |
      <router-link to="/cell">cell</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  // import Home from "./views/shelf/Home.vue";
 
  export default {
    name: 'app',
    data() {
      return {
         message: '哈哈哈哈'
      }
    }
    // components: {Home}
  }
</script>

