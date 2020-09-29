<template>
  <div id="app">
      <main-tab-bar v-if=" check" ></main-tab-bar>
              <keep-alive exclude="Cart,Order,Detail">
                  <router-view></router-view>

              </keep-alive>
  </div>

</template>

<script>
  import changeSize from 'assets/js/app_home'
  import MainTabBar from "./components/content/MainTabBar";

export default {
  name: 'App',
  components: {
     MainTabBar
  },
  data(){
    return{
      showFooter:""
    }
  },
  mounted(){

  },
    computed: {
      check(){
           return  this.$route.path === '/detail'? false: true && this.$route.path === '/login'?false: true
               && (this.$route.path === '/cart'&& this.$store.state.cartNum)  ? false: true
               && this.$route.path=== '/order'? false: true;

        }
    }
}
</script>

<style>
#app {
  font-size: 100px;
    /*width: 100%;*/
    /*height: 500rem;*/
}


    body{
        line-height: 0 !important;
    }

</style>
