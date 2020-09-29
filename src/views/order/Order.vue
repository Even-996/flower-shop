<template>
  <div class="order">
    <header class="headrbar">
      <div @click="historyTo" class="headerbar-left col-md-3 col-xs-3">
        <a class="glyphicon glyphicon-menu-left"></a>
      </div>
      <div class="headerbar-center col-md-6 col-xs-6">
        <p class="headerbar-content" style="margin: 0">填写订单</p>
      </div>
      <div class="headerbar-right col-md-3 col-xs-3"></div>
    </header>
    <div v-if="!showLogin" class="login">
      <span>未注册可在此页面直接下单，已有花礼网账户</span>
      <a style="color: #ff734c" @click="transToLogin">请登录&gt;</a>
      <img @click="showLogin = false" src="~assets/imgs/icons/yuanx.svg" />
    </div>

    <div class="kehu-info">
      <div class="info-big">
        <div class="shouhuo">
          <div>
            <span>收货人</span>
          </div>
          <div>
            <span style="color: #000">请填写收货地址 ></span>
          </div>
        </div>
        <hr style="margin: 0" />
        <div class="shouhuo" style="margin-top: 0">
          <div>
            <span>送达日期</span>
          </div>
          <div>
            <span>请选择送达日期 ></span>
          </div>
        </div>
      </div>
      <div class="borderbd"></div>
      <div class="kefu-item">
        <div>
          <span>订购人信息 </span>
        </div>
        <div class="kefu-item-second">
          <span>请填写 ></span>
        </div>
      </div>
      <div class="kefu-item">
        <div>
          <span>贺卡</span>
        </div>
        <div class="kefu-item-second">
          <span class="heka" style="margin-right: 0.14rem">纸质贺卡</span>
          <span class="heka" style="background: #ff734c; color: #fff"
            >无需贺卡</span
          >
        </div>
      </div>
    </div>
     <div class="carts-wraper" v-for="(item,index) in productList" :key="index">
         <div class="carts">
             <div class="shop-item" >
                 <div class="img">
                     <img :src="require('../../assets/imgs/' + item.src)" />
                 </div>
                 <div class="text">
                     <div class="title">
                         <span>[{{ item.category }}]{{ item.title }}</span>
                     </div>
                     <div class="num">X {{ item.saveNum }}</div>
                     <div class="price">¥{{ item.price1 }}</div>
                 </div>
             </div>
         </div>
     </div>

    <div
      style="
        margin-top: 0.2rem;
        padding: 0 0.2rem;
        border-radius: 0.4rem;
        overflow: hidden;
      "
    >
      <div class="kefu-item" style="border-radius: 0; margin: 0">
        <div>
          <span>发票</span>
        </div>
        <div class="kefu-item-second">
          <span>选填 ></span>
        </div>
      </div>
      <div class="kefu-item" style="margin-top: 0; border-radius: 0; margin: 0">
        <div>
          <span
            >备注: <span style="font-size: 0.2rem; color: #757575">选填</span>
          </span>
        </div>
      </div>
    </div>

    <nav class="dingdan-nav">
      <div  class="push-a">
        <span style="font-size: 0.2rem; margin-left: 0.3rem">应付:</span>
        <span
          style="
            font-size: 0.25rem;
            color: #fe6600;
            font-weight: 500;
            margin-left: 0.2rem;
          "
          >¥{{ totalPrice }}</span
        >
      </div>
      <div style="display: flex; height: 100%; align-items: center">
        <span @click="submitOrder();open()" class="the-push">提交订单</span>
      </div>
    </nav>
    <div style="height: 6rem"></div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    transToLogin() {
      this.$router.push("/login");
    },
    loadCarts() {
      this.productList = JSON.parse(localStorage.getItem("carts")).filter(
        (cart) => {
          return (cart.check === true);
        }
      );
      console.log(this.productList);
    },
    historyTo() {
      this.$router.go(-1);
    },
      submitOrder(){
         let saveCarts = JSON.parse(localStorage.getItem("carts"));
         saveCarts = saveCarts.filter(cart => {
             return cart.check=== false
         })

         localStorage.setItem("carts",JSON.stringify(saveCarts));
         this.$router.push("/pay");
      },
    open(){
      // this.$message({
      //   message: '提交订单成功',
      //   type: 'success'
      // });
    }
  },
  created() {
    this.loadCarts();
  },
  computed: {
      totalPrice(){
        return   this.productList.reduce((c1,c2)=> c1 + c2.price1 * c2.saveNum,0);
      },
    showLogin(){
        if(!this.$store.state.phone){
          return localStorage.getItem("userPhone");
        }else{
          return this.$store.state.phone;
        }
    }
  },
};
</script>

<style scoped>
.order {
  background-color: #f3f5f7;
}

.info-big {
  margin: 0 0.2rem;
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
.headrbar {
  height: 0.8rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}

.login {
  padding-top: 0.1rem;
  font-size: 0.2rem;
  line-height: 1.4;
  margin-top: 0.8rem;
  height: 0.5rem;
  color: #ff734c;
  padding-left: 1rem;
  background: rgba(255, 240, 236, 1);
}
.login a {
  text-decoration: #ff734c;
}

.login img {
  width: 0.3rem;
  height: 0.3rem;
}
.borderbd {
  width: 95%;
  height: 3px;
  background: url(https://img02.hua.com/m/Shopping/20180919/img/m_orderinfo_bd2.png);
  background-repeat: repeat-x;
  background-size: contain;
  margin-left: 0.15rem;
}

.kehu-info {
  font-size: 0.2rem;
  line-height: 1.4;
}
.kehu-info .shouhuo {
  height: 0.8rem;
  background-color: #ffffff;
  margin-top: 0.18rem;
  font-size: 0.22rem;
  justify-content: space-between;
  padding-left: 0.2rem;
  display: flex;
  align-items: center;
}
.kehu-info .shouhuo div:last-child {
  color: #757575;
  font-size: 0.2rem;
  display: flex;
  align-items: center;
  padding-right: 0.15rem;
}
.kefu-item {
  height: 0.8rem;
  background-color: #ffffff;
  font-size: 0.22rem;
  justify-content: space-between;
  padding-left: 0.2rem;
  display: flex;
  align-items: center;
  margin: 0.18rem 0.2rem 0;
  border-radius: 0.1rem;
}
.kefu-item-second {
  padding-right: 0.15rem;
  font-size: 0.2rem;
  color: #757575;
}

.heka {
  background-color: #eee;
  border-radius: 0.2rem;
  display: inline-block;
  height: 0.34rem;
  line-height: 0.34rem;
  width: 1rem;
  text-align: center;
}

.shop-item {
  font-size: 0.2rem;
  line-height: 1.4;
}
.carts .shop-item img {
  width: 1.5rem;
  height: 1.5rem;
  background-color: #e9ecf0;
}

.carts {
  height: 1.8rem;
  background-color: #ffffff;
  margin-top: 0.3rem;
  width: 95%;
  margin-left: 0.15rem;
  border-radius: 0.1rem;
}

.carts .shop-item {
  display: inline-flex;
  margin-top: 0.15rem;
  margin-left: 0.2rem;
  width: 100%;
}

.carts .shop-item .text {
  margin-left: 0.2rem;
}
.carts .shop-item .text .title {
  font-size: 0.23rem;
  margin-top: 0.2rem;
}
.carts .shop-item .text .num {
  margin-top: 0.2rem;
}
.carts .shop-item .text .price {
  position: absolute;
  margin-left: 4rem;
  font-weight: bold;
  margin-top: -0.3rem;
}
.dingdan-nav {
  width: 100%;
  background-color: #fff;
  height: 0.8rem;
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.push-a span {
  font-size: 0.3rem;
  line-height: 1.4rem;
}
.the-push {
  background: #fe6600;
  display: inline-block;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #fff;
  width: 1.6rem;
  font-size: 0.26rem;
  border-radius: 0.3rem;
  margin-right: 0.2rem;
  text-align: center;
}
</style>