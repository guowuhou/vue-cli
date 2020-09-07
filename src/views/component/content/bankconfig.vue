<template>
  <div>
    <img alt="Vue logo" src="../../../assets/logo.png" />
    <p>我是客户组件</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  mixins:[], //引用混入js文件，在该组件内可以调用该组件内的方法
  name: "clientTag",
  components: {
    HelloWorld
  },
  data() {
      return {
          name: ''
      }
  },
  methods: {

  }
};
</script>

<style>

</style>
