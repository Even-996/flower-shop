<template>
  <div class="tuijian">
    <div class="style-div"></div>
    <div class="flower-tuijian">
      <div class="title">
        <span>永生花推荐</span>
      </div>
      <div class="flower-tuijian-wraper row">
        <div
          class="tuijian-one"
          v-for="(item, index) in flowerTuijianList"
          :key="index"
        >
          <div class="img">
            <img :src="require('../../../assets/imgs/' + item.src)" />
          </div>
          <div class="span" style="padding-left: 0.18rem;">
            <div class="item-title">
              <span>{{ item.title }}</span>
            </div>
            <div class="describ">
              <span>{{ item.describ }}</span>
            </div>
            <div class="cart" style="display:flex;margin-bottom: 0.1rem;">
              <div style="width:80%">
                <div class="price">
                  <span
                    >¥{{ item.price1 }}<s>¥{{ item.price2 }}</s></span
                  >
                </div>
                <div class="sale">
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
    <div class="style-div"></div>
    <div class="flower-tuijian">
      <div class="title">
        <span>蛋糕推荐</span>
      </div>
      <div class="flower-tuijian-wraper row">
        <div
          class="tuijian-one"
          v-for="(item, index) in DanGaoTuijianList"
          :key="index"
        >
          <div class="img">
            <img :src="require('../../../assets/imgs/' + item.src)" />
          </div>
          <div class="span" style="padding-left: 0.18rem;">
            <div v-if="item.title" class="item-title">
              <span>{{ item.title }}</span>
            </div>
            <div class="describ">
              <span>{{ item.describ }}</span>
            </div>
             <div class="cart" style="display:flex;margin-bottom: 0.1rem;">
              <div style="width:80%">
                <div class="price">
                  <span
                    >¥{{ item.price1 }}<s>¥{{ item.price2 }}</s></span
                  >
                </div>
                <div class="sale">
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
    <div class="style-div"></div>
    <div class="flower-tuijian">
      <div class="title">
        <span>礼品推荐</span>
      </div>
      <div class="flower-tuijian-wraper row">
        <div
          class="tuijian-one"
          v-for="(item, index) in giftTuijianList"
          :key="index"
        >
          <div class="img">
            <img :src="require('../../../assets/imgs/' + item.src)" />
          </div>
          <div class="span" style="padding-left: 0.18rem;">
            <div v-if="item.title" class="item-title">
              <span>{{ item.title }}</span>
            </div>
            <div class="describ">
              <span>{{ item.describ }}</span>
            </div>
             <div class="cart" style="display:flex;margin-bottom: 0.1rem;">
              <div style="width:80%">
                <div class="price">
                  <span
                    >¥{{ item.price1 }}<s>¥{{ item.price2 }}</s></span
                  >
                </div>
                <div class="sale">
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
  </div>
</template>

<script>
export default {
  name: "Tuijian",
  data() {
    return {
      flowerTuijianList: [
        {
          id: 1100,
          src: "1073263.jpg_220x240.jpg",
          title: "创意新品",
          describ: "永生花满月艺术台灯/朦...",
          price1: 398,
          price2: 498,
          num: 483,
        },
        {
          id: 1101,
          src: "1073264.jpg_220x240.jpg",
          title: "创意新品",
          describ: "一鹿(路)有你永生花小...",
          price1: 288,
          price2: 388,
          num: 962,
        },
        {
          id: 1102,
          src: "1073256.jpg_220x240.jpg",
          title: "新款新型项链",
          describ: "我如此爱你-施华洛世奇...",
          price1: 1190,
          price2: 1590,
          num: 69,
        },
        {
          id: 1103,
          src: "1073276.jpg_220x240.jpg",
          title: "送老师长辈定制",
          describ: "花好月圆永生花台灯/送...",
          price1: 298,
          price2: 398,
          num: 583,
        },
      ],
      DanGaoTuijianList: [
        {
          id: 1104,
          src: "5302017.jpg_220x240.jpg",
          title: "生日特惠",
          describ: "甜蜜如心(8寸)·元祖鲜奶蛋糕，布丁加水果夹层",
          price1: 258,
          price2: 358,
          num: 3690,
        },
        {
          id: 1105,
          src: "5010040.jpg_220x240.jpg",
          title: "生日特惠",
          describ: "多彩生活·2磅(8寸)水果蛋糕",
          price1: 179,
          price2: 209,
          num: 5862,
        },
        {
          id: 1106,
          src: "5221035.jpg_220x240.jpg",
          describ: "深爱（1磅）+方形蜡烛·水果夹层蛋糕",
          price1: 276,
          price2: 376,
          num: 270,
        },
        {
          id: 1107,
          src: "5211001.jpg_220x240.jpg",
          describ: "新排行榜COOL酪(1.5磅)·乳酪蛋糕",
          price1: 358,
          price2: 458,
          num: 723,
        },
      ],
      giftTuijianList: [
        {
          id: 1108,
          src: "3090050.jpg_220x240.jpg",
          describ: "香港元朗荣华低糖双黄白莲蓉...",
          title: "健康低糖",
          price1: 188,
          price2: 238,
          num: 259,
        },
        {
          id: 1109,
          src: "1065046.jpg_220x240.jpg",
          title: "灯光蓝牙音响",
          describ: "麋鹿水晶音乐盒/旋转蓝牙音箱...",
          price1: 296,
          price2: 396,
          num: 311,
        },
        {
          id: 1110,
          src: "1076062.jpg_220x240.jpg",
          title: "火热畅销款",
          describ: "星期耳钉礼盒·s925银个性耳钉",
          price1: 239,
          price2: 369,
          num: 1969,
        },
        {
          id: 1111,
          src: "1061006.jpg_220x240.jpg",
          title: "热卖推荐",
          describ: "999纯金箔玫瑰+陶瓷花瓶...",
          price1: 138,
          price2: 256,
          num: "3.5万",
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
.tuijian-one {
  box-shadow: 0 0.2rem 0.8rem 0 #e9ecf0;
  border-radius: 0.1rem;
  padding: 0;
  overflow: hidden;
  width: 48%;
  margin: 0 0.06rem 0.15rem;
  display: inline-block;
}
.style-div {
  height: 0.2rem;
  width: 100%;
  background-color: #e9ecf0;
}
.tuijian {
  line-height: 1.42857143;
  width: 100%;
}

.flower-tuijian {
  width: 100%;
}

.flower-tuijian .title {
  font-size: 0.3rem;
  text-align: center;
  margin: 0.3rem 0;
}
.flower-tuijian-wraper .img img {
  width: 100%;
}
.flower-tuijian-wraper {
  font-size: 0.2rem;
  margin: 0 0.1rem;
}
.flower-tuijian-wraper .item-title {
  color: #ff734c;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  border: solid 1px #ff734c;
  border-radius: 1rem;
  width: 1.8rem;
  text-align: center;
}

.flower-tuijian-wraper .describ {
  font-weight: 300;
  font-size: 0.2rem;
}

.flower-tuijian-wraper .price {
  color: #ff734c;
  font-weight: 500;
  font-size: 0.3rem;
}
.flower-tuijian-wraper .price s {
  color: #71797f;
  font-size: 0.2rem;
  margin-left: 0.2rem;
}

.flower-tuijian-wraper .sale {
  color: #71797f;
}

.flower-tuijian-wraper .cart-img  {
  font-size: 0.35rem;
  padding-top: 0.2rem;
}
.more {
  text-align: center;
  line-height: 0;
  margin-bottom: 0.2rem;
}
.more button {
  width: 1.5rem;
  height: 0.5rem;
  font-size: 0.24rem;
  border: solid 1px black;
  color: black;
  background-color: #ffffff;
  border-radius: 4px;
  background: #fff;
}

.describ {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>