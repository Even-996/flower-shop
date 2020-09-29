<template>
    <div class="home-swiper">
         <swiper>
             <swiper-item class="swiperItem" v-for="(item,index) in banners" :key="index">
                   <a href="#">
                       <img :src= "require('../../../assets/imgs/' + item)" >
<!--                       "require('../assets/img/'+ item.img)"-->
                   </a>
             </swiper-item>
         </swiper>
    </div>
</template>

<script>
    import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        name: "HomeSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            banners:{
                type: Array,
                default: []
            }
        }


    }
</script>

<style scoped>

    .home-swiper{
        margin-top: 1.2rem;
    }

    .home-swiper a img{
        width: 100%;

    }
</style>