<template>
  <div class="cart">
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
    <header class="headrbar2">
      <div @click="historyTo" class="headerbar-left col-md-3 col-xs-3">
        <a class="glyphicon glyphicon-menu-left"></a>
      </div>
      <div class="headerbar-center col-md-6 col-xs-6">
        <p class="headerbar-content">购物车</p>
      </div>
      <div class="headerbar-right col-md-3 col-xs-3"></div>
    </header>
    <section class="main2">
      <div v-if="!num">
        <div v-if="!userInfo" class="login">
          <span>登录后将同步您的购物车商品</span>
          <a href="/login" class="login-btn" style="margin-top: -0.1rem"
          >登录</a
          >
        </div>
        <div class="emptycart">
          <img src="../../assets/imgs/cart/m_shopping_empty_cart.png" />
          <p>购物车内暂时没有商品</p>
          <a href="/home">去逛逛</a>
        </div>
      </div>
      <!--展示购物车商品-->
      <div class="shop-carts" v-for="(item, index) in cartsList" :key="index">
        <div class="row">
          <div
                  @click="changeCheck(item.id)"
                  class="left col-xs-2 col-sm-2"
                  style="margin-top: 0.35rem"
          >
            <img
                    @click="item.check = !item.check"
                    v-show="item.check"
                    src="~assets/imgs/icons/checkAll.svg"
            />
            <img
                    v-show="!item.check"
                    src="~assets/imgs/icons/notCheck.svg"
                    style="width: 0.5rem"
            />
          </div>
          <div class="img col-xs-4 col-sm-4">
            <img :src="require('../../assets/imgs/' + item.src)" />
          </div>

          <div class="right col-xs-6 col-sm-6">
            <div class="title">
              <span>[{{ item.category }}] {{ item.title }}</span>
            </div>
            <div class="num-item">
              <div class="num">
                <span>数量</span>
              </div>
              <div
                      class="img el-icon-delete"
                      @click="deleteCart(item.id)"
              ></div>
              <div class="input">
                <input
                        @blur="updateCartNum(item)"
                        type="text"
                        v-model="item.saveNum"
                />
              </div>
              <div @click="addCart(item)" class="button">
                <button>+</button>
              </div>
            </div>
            <div class="price">¥{{ item.price1 }}</div>
          </div>
        </div>
      </div>

      <div class="guess">
        <div class="guess-title">猜你喜欢</div>
        <div class="guess-list">
          <div
                  class="guess-item"
                  v-for="(item, index) in flowerlist"
                  :key="index"
          >
            <a>
              <div class="guess-item-img">
                <img :src="require('../../assets/imgs/' + item.src)" />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <span class="guess-item-name"> {{ item.name }} </span>
                  ·<span class="guess-item-desc">{{ item.desc }}</span>
                </div>
                <div class="guess-item-price">{{ item.price }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="guess-bottom">
        <span>已经到底喽…</span>
      </div>
      <div style="height: 1.5rem"></div>
      <div v-if="cartNum" class="footer">
        <div class="cacu">
          <span
          >合计：
            <p>¥{{ allPrice }}</p></span
          >

          <span
                  @click="
              transToOrder();
              deleteCarts();
            "
          >去结算({{ cartNum }})</span
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    data() {
      return {
        flowerlist: [
          {
            src: "9010966.jpg_220x240.jpg",
            name: "一往情深",
            desc: "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
            price: "¥239",
          },
          {
            src: "9012471.jpg_220x240.jpg",
            name: "你是唯一",
            desc: "卡罗拉红玫瑰11枝",
            price: "¥138",
          },
          {
            src: "9012467.jpg",
            name: "Best for You",
            desc: "戴安娜粉玫瑰11枝",
            price: "¥148",
          },
          {
            src: "9012450.jpg",
            name: "韩式系列/初心不负",
            desc:
                    " 韩式花束系列花艺师全新打造，卡罗拉玫瑰11枝、白底粉边洋桔梗5枝、大叶尤加利10枝",
            price: "¥228",
          },
          {
            src: "9012474.jpg_220x240.jpg",
            name: "韩式系列/慢慢喜欢你",
            desc: "艾莎玫瑰16枝",
            price: "¥239",
          },
          {
            src: "9012177.jpg_220x240.jpg",
            name: "不变的承诺",
            desc: "99枝红玫瑰",
            price: "¥568",
          },
        ],
        cartNum: 0,
        cartsList: [],
      };
    },
    created() {
      this.loadData();
    },
    computed: {
      allPrice() {
        return this.cartsList.reduce(
                (c1, c2) => (c2.check === true ? c1 + c2.saveNum * c2.price1 : c1),
                0
        );
      },
      userInfo(){
        if(!this.$store.state.phone){
           return localStorage.getItem("userPhone");
        }else{
          return this.$store.state.phone;
        }
      }
    },

    methods: {
      changeCheck(id) {
        this.$store.commit("updateCart", id);
        this.loadData();
      },
      deleteCart(id) {
        this.$store.commit("deleteCart", id);
        this.loadData();
      },
      addCart(item) {
        console.log(item);
        this.$store.commit("addCart", item);
        this.loadData();
      },
      updateCartNum(item) {
        this.$store.commit("updateCartNum", item);
        this.loadData();
      },
      loadData() {
        let carts = JSON.parse(localStorage.getItem("carts"));
        if (carts) {
          let checkCarts = carts.filter((cart) => {
            return cart.check === true;
          });
          this.cartNum = checkCarts.length;
          this.num = carts.length;
        }

        console.log(carts);
        this.cartsList = carts;
      },
      historyTo() {
        this.$router.go(-1);
      },
      transToOrder() {
        this.$router.push("/order");
      },
      deleteCarts() {
        let carts = this.$store.state.carts;
        carts = carts.filter((cart) => {
          return cart.check === false;
        });
        this.$store.state.carts = carts;
        this.$store.state.cartNum = carts.length;
      },
    },
  };
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }
  .wode-main {
    background: #e9ecf0;
    height: 14rem;
  }
  hr {
    margin: 0;
  }
  p,
  a {
    font-size: 0.3rem;
    color: #000;
    margin: 0;
  }
  .headerbar-center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .headerbar-content {
    font-size: 0.3rem;
  }
  .headerbar-left {
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    height: 100%;
  }
  .headerbar-left a {
    font-size: 0.3rem;
    color: #000;
    text-decoration: none;
  }
  .headrbar2 {
    height: 0.8rem;
    background-color: #fff;
  }
  .login {
    width: 100%;
    background-color: #fff0ec;
    border: 1px solid rgba(255, 115, 76, 0.2);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login span {
    font-size: 0.2rem;
    line-height: 1rem;
  }
  .login-btn {
    border: 1px solid #ff734c;
    color: #ff734c;
    font-size: 0.25rem;
    width: 1.4rem;
    margin-left: 0.2rem;
    height: 0.5rem;
    display: inline-block;
    line-height: 0.5rem;
    border-radius: 0.4rem;
  }
  .emptycart {
    padding: 0.9rem 0 1rem;
    width: 100%;
    text-align: center;
    border-bottom: 0.15rem solid #eee;
  }
  .emptycart img {
    width: 2.5rem;
    margin-left: -0.3rem;
  }
  .emptycart p {
    margin-top: 0.45rem;
    font-size: 0.25rem;
    letter-spacing: 0.01rem;
  }
  .emptycart a {
    background-color: #ff734c;
    color: #fff;
    font-size: 0.3rem;
    font-weight: 2rem;
    font-weight: 600;
    display: inline-block;
    width: 2.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    border-radius: 0.4rem;
  }
  .guess-title {
    font-size: 0.3rem;
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.3rem;
  }
  .guess-item {
    width: 48%;
    box-shadow: 0rem 0.2rem 0.2rem 0rem #dee2e5;
    border-radius: 0.1rem;
    display: inline-block;
    margin: 0 0.9% 0.1rem;
    overflow: hidden;
  }
  .guess-item-img img {
    width: 100%;
  }
  .guess-item-info {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 0.1rem;
  }
  .guess-item-info span {
    font-size: 0.2rem;
    line-height: 0.3rem;
  }
  .guess-item-price {
    color: #ff734c;
    line-height: 0.25rem;
    margin: 0.15rem 0;
  }
  .guess-bottom {
    margin: 0.1rem 0;
    text-align: center;
  }
  .guess-bottom span {
    font-size: 0.25rem;
    color: #71797f;
    line-height: 0.3rem;
  }

  .shop-carts {
    border-top: solid 1px #e9ecf0;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
  .shop-carts .left img {
    width: 0.6rem;
    height: 0.6rem;
    margin-left: 0.3rem;
    margin-top: 0.6rem;
  }

  .shop-carts .img img {
    width: 100%;
  }

  .shop-carts .img {
  }

  .shop-carts .right .title {
    font-size: 0.3rem;
    line-height: 2;
    margin-left: 0.2rem;
  }

  .shop-carts .right .num-item {
    font-size: 0.25rem;
    margin-left: 0.2rem;
    display: inline-flex;
    margin-top: -0.5rem;
  }

  .shop-carts .right .num-item .img {
    width: 0.45rem;
    height: 0.45rem;
    background-color: #f7f9fa;
    margin-left: 0.3rem;
    text-align: center;
    padding-top: 0.06rem;
    border: solid 1px #e9ecf0;
  }

  .shop-carts .right .num-item .num {
    margin-top: 0.2rem;
  }
  .shop-carts .right .num-item input {
    height: 0.45rem;
    width: 1.2rem;
    background-color: #f7f9fa;
    border: solid 1px #e9ecf0;
    text-align: center;
    padding-right: 0.2rem;
    padding-left: 0.15rem;
  }

  .shop-carts .right .num-item button {
    width: 0.45rem;
    height: 0.45rem;
    font-size: 0.4rem;
    background-color: #f7f9fa;
    border: solid 1px #e9ecf0;
  }
  .shop-carts .right .price {
    font-size: 0.3rem;
    margin-top: 1rem;
    color: #ff734c;
    font-weight: 500;
    margin-left: 0.2rem;
  }

  .shop-carts .right .num-item img {
    width: 0.3rem;
    height: 0.3rem;
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99;
  }

  .footer .cacu {
    background-color: #ffffff;
    height: 1rem;
    font-size: 0.2rem;
  }
  .footer .cacu span:first-child {
    font-size: 0.3rem;
    position: absolute;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
  .footer .cacu span:first-child p {
    color: #ff734c;
    font-weight: 600;
    margin-left: 0.8rem;
    font-size: 0.4rem;
  }

  .footer .cacu span:last-child {
    float: right;
    background-color: #ff734c;
    height: 1rem;
    width: 2.4rem;
    padding-top: 0.5rem;
    padding-left: 0.6rem;
    color: #ffffff;
    font-size: 0.3rem;
  }
</style>