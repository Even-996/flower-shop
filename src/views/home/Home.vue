<template>
  <div class="home">
    <el-backtop style="right: 20px; bottom: 70px">
      <div
        class="el-icon-top"
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #fff;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #000;
            border-radius: 50%;
          }
        "
      ></div>
    </el-backtop>
    <nav-bar class="navbar-wraper">
      <div
        class="navbar-left"
        slot="left"
        style="display: flex; align-items: center"
      >
        <a href="/category">
          <img src="../../assets/imgs/icon-chazhaoliebiao.svg" />
        </a>
      </div>
      <div class="navbar-center" slot="center">
        <img :src="homelogo" />
      </div>
      <div class="navbar-right" slot="right">
        <img src="../../assets/imgs/icon-kefu.svg" />
      </div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <comment></comment>
    <flower-and-gift></flower-and-gift>
    <festival-banner></festival-banner>
    <cart-thing></cart-thing>
    <tuijian></tuijian>
    <footer-info></footer-info>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childHomeComps/HomeSwiper";
import HomeTabItem from "./childHomeComps/HomeTabItem";
import Comment from "./childHomeComps/Comment";
import FlowerAndGift from "./childHomeComps/FlowerAndGift";
import FestivalBanner from "./childHomeComps/FestivalBanner";
import CartThing from "./childHomeComps/CartThing";
import Tuijian from "./childHomeComps/Tuijian";
import FooterInfo from "./childHomeComps/FooterInfo";

export default {
  name: "Home",
  data() {
    return {
      homelogo: require("../../assets/imgs/m_hualogo.png"),
      banners: [
        "20_zhongqiu_banner_m.jpg",
        "19_birthday_banner_m.jpg",
        "20_xingzuo_chunvzuo.jpg",
        "18_youflower_m.jpg",
      ],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeTabItem,
    Comment,
    FlowerAndGift,
    FestivalBanner,
    CartThing,
    Tuijian,
    FooterInfo,
  },
  created() {
    // this.getHomeMultData()
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.home {
  margin-bottom: 0.7rem;
}
.navbar-wraper {
  background-color: #435448;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
}

.navbar-left img {
  width: 70%;
  height: 70%;
}

.navbar-center img {
  width: 50%;
  height: 50%;
}
.navbar-right img {
  width: 70%;
  height: 70%;
}

.qixiguanggao {
  display: flex;
}
.qixiguanggao a {
  width: 100%;

  line-height: 4rem;
  height: 5rem;
}
.qixiguanggao img {
  width: 100%;
  vertical-align: middle;
}
</style>