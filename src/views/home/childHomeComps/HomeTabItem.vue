<template>
    <div class="home-tabItem">

         <tab-item class="tabItem" v-for="(item,index) in tabItems" :key="index">

                 <div slot="img">
                     <img :src="item.src">
                 </div>
                 <div slot="title">
                     <span>{{item.text}}</span>
             </div>
         </tab-item>
        </div>

</template>

<script>
    import TabItem from 'components/common/tabItem/TabItem'
    export default {
        name: "HomeTabItem",
        components:{
            TabItem
        },
        props:{
            tabItems:{
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>
.home-tabItem{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 0;
    width: 100%;
    /*margin-left: .4rem;*/
    /*padding-left: .6rem;*/
}

    .tabItem{
        flex: 1;
        /*margin-left: .3rem;*/
        width: 20%;
        /*width: 50%;*/
        height: 2rem;
        /*background-color: red;*/
            }

    .tabItem img{
        width: 100%;
        /*height: 100%;*/

    }
    .tabItem span{
        display: inline;
        /*line-height: .3rem;*/
        font-size: .3rem;
        line-height: 0rem;
        /*padding-left: .3rem;*/
        /*padding-right: .3rem;*/
    }



</style>