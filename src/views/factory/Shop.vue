<template>
  <div class="about">
    <h1>{{name}}</h1>
    <h1>{{total}}</h1>
    <HelloWorld />
  </div>
</template>
<script>
  import {mapActions, mapGetters, mapMutation} from 'vuex';
  import HelloWorld from "@/components/HelloWorld.vue";

  let key = 'shop'
  export default {
    mixins:[], //引用混入js文件，在该组件内可以调用该组件内的方法
    name: "shop",
    components: {
      HelloWorld
    },
    computed: {
      ...mapGetters({
        total: key + '/getQueryListTotal',
        getQueryList: key + '/getQueryListResult'
      })
    },
    data() {
        return {
            name: 'This is an shop page'
        }
    },
    mounted() {
      let list = this.getQueryList;
      this.queryListFun();
    },
    methods: {
      ...mapActions({
        getQueryListAction: key + '/getQueryListAction'
      }),
      queryListFun(){
        this.getQueryListAction({
            data: {id: 'gwh'},
            vm: this,
            cb: (res) => {
              // debugger;
            } 
        })
      }
    }
  };
</script>

<style>

</style>
