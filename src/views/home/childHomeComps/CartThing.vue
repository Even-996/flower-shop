<template>
  <div class="cart-thing">
      <div style="width:100%;height:0.2rem;background-color:#eee"></div>
    <div class="product-title">
      <span>送恋人/爱情鲜花</span>
    </div>
    <div class="product-list container" style="margin: 0 0.1rem">
      <div
        class="product-item row"
        v-for="(item, index) in productList"
        :key="index"
      >
        <div class="product-item-img col-xs-6 col-sm-6">
          <img :src="require('../../../assets/imgs/' + item.src)" />
        </div>
        <div class="product-item-span col-xs-6 col-sm-6">
          <div class="title">
            <span>{{ item.title }}</span>
          </div>
          <div class="describe">
            <span>{{ item.describ }}</span>
          </div>
          <div class="text">
            <span>{{ item.text }}</span>
          </div>
          <div class="text2">
            <span v-if="item.text2">{{ item.text2 }}</span>
          </div>
          <div class="cart-thing-go">
            <div style="width: 80%">
              <div>
                <span
                  >￥{{ item.price1 }}<s>￥{{ item.price2 }}</s></span
                >
              </div>
              <div>
                <span>已销售{{ item.num }}件</span>
              </div>
            </div>
            <div
              class="cart-img el-icon-shopping-cart-2"
              @click="addCart(item)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <button>查看更多</button>
    </div>
    <div class="product-title">
      <span>送长辈鲜花</span>
    </div>
    <div class="product-list container" style="margin: 0 0.1rem">
      <div
        class="product-item row"
        v-for="(item, index) in productList2"
        :key="index"
      >
        <div class="product-item-img col-xs-6 col-sm-6">
          <img :src="require('../../../assets/imgs/' + item.src)" />
        </div>
        <div class="product-item-span col-xs-6 col-sm-6">
          <div class="title">
            <span>{{ item.title }}</span>
          </div>
          <div class="describe">
            <span>{{ item.describ }}</span>
          </div>
          <div class="text">
            <span>{{ item.text }}</span>
          </div>
          <div class="text2">
            <span v-if="item.text2">{{ item.text2 }}</span>
          </div>
           <div class="cart-thing-go">
            <div style="width: 80%">
              <div>
                <span
                  >￥{{ item.price1 }}<s>￥{{ item.price2 }}</s></span
                >
              </div>
              <div>
                <span>已销售{{ item.num }}件</span>
              </div>
            </div>
            <div
              class="cart-img el-icon-shopping-cart-2"
              @click="addCart(item)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <button>查看更多</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartThing",
  data() {
    return {
      productList: [
        {
          id: 1001,
          src: "9010966.jpg_220x240.jpg",
          title: "一往情深",
          describ: "精品玫瑰礼盒：19支红...",
          text: "年度销售冠军!",
          text2: "经典爆款，年销售冠军!",
          price1: 239,
          price2: 315,
          num: "12.8万",
        },
        {
          id: 1002,
          src: "9012471.jpg_220x240.jpg",
          title: "你是唯一",
          describ: "卡罗拉红玫瑰11支",
          text: "11支热销款",
          text2: "11支新品，一心一意的爱",
          price1: 138,
          price2: 189,
          num: "4.6万",
        },
        {
          id: 1003,
          src: "9012474.jpg_220x240.jpg",
          title: "韩式系列/亲爱的你",
          describ: "粉佳人玫瑰16支，百合...",
          text: "全新韩式系列",
          text2: "花艺师打造 韩式华语系列",
          price1: 369,
          price2: 469,
          num: "1.7万",
        },
        {
          id: 1004,
          src: "9012243.jpg_220x240.jpg",
          title: "恋恋情深",
          describ: "11支香槟玫瑰，白色多头",
          text: "百合2支",
          text2: "经典款式 简约设计",
          price1: 196,
          price2: 255,
          num: "7.9万",
        },
        {
          id: 1005,
          src: "9012177.jpg_220x240.jpg",
          title: "不变的承诺",
          describ: "99支红玫瑰",
          text: "经典99支",
          text2: "经典99支，鼎力推荐!",
          price1: 568,
          price2: 689,
          num: "6.6万",
        },
        {
          id: 1006,
          src: "9012154.jpg_220x240.jpg",
          title: "甜美公主",
          describ: "白玫瑰22支，粉佳人粉玫瑰14支",
          text2: "甜美设计 清新典雅",
          price1: 369,
          price2: 485,
          num: "2.5万",
        },
        {
          id: 1007,
          src: "9012009.jpg_220x240.jpg",
          title: "忘情巴黎",
          describ: "33支红玫瑰",
          text: "畅销爆款",
          text2: "浪漫唯美，女神挚爱",
          price1: 298,
          price2: 382,
          num: "7.1万",
        },
        {
          id: 1008,
          src: "9012474.jpg_220x240.jpg",
          title: "韩式系列/慢慢喜欢你",
          describ: "爱莎玫瑰16支",
          text: "全新爱莎玫瑰",
          text2: "全新韩式系列 珍品玫瑰",
          price1: 239,
          price2: 329,
          num: 1962,
        },
      ],
      productList2: [
        {
          id: 1009,
          src: "9012452.jpg_220x240.jpg",
          title: "韩式系列/一路向西",
          describ: "向日葵3支,香槟玫瑰9...",
          text: "全新韩式系列",
          text2: "花艺师打造 韩式花束系列",
          price1: 296,
          price2: 398,
          num: "6.6万",
        },
        {
          id: 1010,
          src: "9012189.jpg_220x240.jpg",
          title: "恩情无限",
          describ: "粉色康乃馨10支，百合2支",
          text: "人气推荐",
          text2: "精选花材",
          price1: 178,
          price2: 232,
          num: "1.5万",
        },
        {
          id: 1011,
          src: "9012440.jpg_220x240.jpg",
          title: "星河璀璨",
          describ: "香槟玫瑰9支，蓝绣球...",
          text: "9折优惠",
          text2: "倾情设计 9折特惠",
          price1: 262,
          price2: 376,
          num: "4172",
        },
        {
          id: 1012,
          src: "9012095.jpg_220x240.jpg",
          title: "幸福绽放",
          describ: "粉色康乃馨19支",
          text2: "温暖之选 亮丽花色 特价",
          price1: 165,
          price2: 215,
          num: "1.6万",
        },
        {
          id: 1013,
          src: "9012332.jpg_220x240.jpg",
          title: "留住好时光",
          describ: "粉绣球一支，粉雪山玫瑰...",
          text: "热卖推荐",
          text2: "精选昆明A级花材",
          price1: 245,
          price2: 306,
          num: "1.2万",
        },
        {
          id: 1014,
          src: "9012095.jpg_220x240.jpg",
          title: "幸福万年长",
          describ: "红色康乃馨66支，白边...",
          text: "精选优品",
          text2: "温暖花束 幸福万年长",
          price1: 346,
          price2: 486,
          num: "3956",
        },
      ],
    };
  },
  methods: {
    addCart(item) {
      let cart = item;
      cart.category = "鲜花";
      this.$store.commit("addCart", cart);
      console.log(this.$store.state.carts);
      this.$message({
        message: "添加购物车成功",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.cart-thing {
  background-color: #ffffff;
}

.product-title {
  font-size: 0.3rem;
  text-align: center;
  /*position: absolute;*/
  margin-top: 0.5rem;
  margin-bottom: 0.4rem;
  z-index: 3;
}
.product-item-img img {
  width: 100%;
}
.product-item-span {
  font-size: 0.2rem;
  line-height: 1.42857143;
  background-color: #ffffff;
}
.product-item .cart-img img {
  width: 0.3rem;
  height: 0.3rem;
}

.product-list .product-item {
  margin-top: 0.3rem;
  box-shadow: 0rem 0.1rem 0.2rem 0rem #e9ecf0;
}

.product-list .product-item-span .title {
  margin-top: 0.3rem;
  font-size: 0.25rem;
}
.product-list .product-item-span .describe {
  font-size: 0.18rem;
  color: inherit;
}
.product-list .product-item-span .text {
  background-color: #ff734c;
  text-align: center;
  width: 1.5rem;
  border-radius: 2rem;
  margin-top: 0.1rem;
  color: #fff;
}
.product-list .product-item-span .text2 {
  border-top: solid 1px #e9ecf0;
  border-bottom: solid 1px #e9ecf0;
  padding-top: 0.2rem;
  margin-top: 0.2rem;
  height: 0.6rem;
  font-weight: 500;
  color: black;
}
.product-list .product-item-span .cart-thing-go {
  margin-top: 0.2rem;
  display: flex;
}
.product-list .product-item-span .cart-thing-go s {
  font-size: 0.15rem;
  color: #71797f;
}

.product-item-span .cart-thing-go .cart-img {
  font-size: 0.35rem;
  padding-top: 0.1rem;
}
.cart-thing .more {
  text-align: center;
  margin-bottom: 0.5rem;
}

.cart-thing .more button {
  width: 1.5rem;
  height: 0.5rem;
  font-size: 0.24rem;
  border: solid 1px black;
  color: black;
  background: #fff;
}
</style>