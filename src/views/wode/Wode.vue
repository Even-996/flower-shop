<template>
  <div class="wode-main">
    <header class="headrbar">
      <div class="headerbar-left col-md-3 col-xs-3">
        <a @click="historyGo" class="glyphicon glyphicon-menu-left"></a>
      </div>
      <div class="headerbar-center col-md-6 col-xs-6">
        <p class="headerbar-content">个人中心</p>
      </div>
      <div class="headerbar-right col-md-3 col-xs-3"></div>
    </header>
    <section class="main">
      <div v-if="!phone" class="userinformation">
        <div class="userinformation-notlogin">
          <p class="userinformation-notlogin-hi">Hi,欢迎来到花礼网</p>
          <p class="userinformation-notlogin-gologin">
            <a @click="transtoLogin">登录/注册</a>
          </p>
        </div>
      </div>
      <div v-else>
        <div class="userinformation">
          <div class="userinformation-notlogin">
            <img class="img" src="~assets/imgs/icons/avatar_default_07.jpg" />
            <p
              style="
                margin-left: 0.8rem;
                margin-top: -0.2rem;
                font-size: 0.3rem;
              "
              class="userinformation-notlogin-hi"
            >
              {{ phone }}
            </p>
            <div class="regist">
              <span>注册会员</span>
            </div>
          </div>
        </div>
      </div>
      <div class="panel thefirst">
        <div class="panel-head">
          <div class="panel-head-title col-md-6 col-xs-6">我的订单</div>
          <div class="panel-head-right col-md-6 col-xs-6">
            <a href>
              全部订单
              <i class="glyphicon glyphicon-menu-right"></i>
            </a>
          </div>
        </div>
        <hr />
        <div class="panel-body">
          <div class="order">
            <div class="order-item col-md-4 col-xs-4">
              <a href>
                <img
                  class="order-item-icon"
                  src="../../assets/imgs/wode/myinfo_pendingpay.png"
                />
                <p>待付款</p>
              </a>
            </div>
            <div class="order-item col-md-4 col-xs-4">
              <a href>
                <img
                  class="order-item-icon"
                  src="../../assets/imgs/wode/myinfo_distribution.png"
                />
                <p>今日配送</p>
              </a>
            </div>
            <div class="order-item col-md-4 col-xs-4">
              <a href>
                <img
                  class="order-item-icon"
                  src="../../assets/imgs/wode/myinfo_evaluation.png"
                />
                <p>待评价</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-body">
          <div
            class="linkbox clear"
            style="margin-bottom: 0.3rem; margin-top: 0.1rem"
          >
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/iconfont-coupons.png" />
                <p>优惠券</p>
              </a>
            </div>
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/vip-card.png" />
                <p>权益卡</p>
              </a>
            </div>
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/iconfont-balance.png" />
                <p>余额</p>
              </a>
            </div>
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/iconfont-diamond.png" />
                <p>会员积分</p>
              </a>
            </div>
          </div>
          <hr />
          <div
            class="linkbox clear"
            style="margin-bottom: 0.2rem; margin-top: 0.3rem"
          >
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/iconfont-address.png" />
                <p>收货地址</p>
              </a>
            </div>
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/iconfont-clock.png" />
                <p>生日纪念</p>
              </a>
            </div>
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/iconfont-collect.png" />
                <p>我的收藏</p>
              </a>
            </div>
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/Pending payment.png" />
                <p>浏览记录</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="panel" style="margin-top: 0.2rem">
        <div class="panel-body">
          <div
            class="linkbox clear"
            style="margin-bottom: 0.3rem; margin-top: 0.1rem"
          >
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/sevice.png" />
                <p>联系客服</p>
              </a>
            </div>
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/iconfont-question.png" />
                <p>帮助中心</p>
              </a>
            </div>
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/iconfont-info.png" />
                <p>关于花礼</p>
              </a>
            </div>
            <div class="linkbox-item col-md-3 col-xs-3">
              <a href>
                <img src="../../assets/imgs/wode/iconfont-cog.png" />
                <p>设置</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="displayThis" class="panel" style="margin-top: 0.2rem">
        <div class="panel-body" style="padding: 0">
          <div class="wxgirl">
            <div class="wxgirl-img">
              <img src="../../assets/imgs/wode/wxguanjia-kf.png" />
            </div>
            <p class="wxgirl-content">
              Hi~我是您的专属助理喜棠，可以给您推荐礼物和跟踪订单，有需求时，1对1帮您⾛绿⾊通道处理~
            </p>
            <div class="wxgirl-right">
              <div class="wxgirl-right-btn">
                <el-popover
                  width="100"
                  trigger="click"
                >
                 <div style="width:100px;height:100px;margin-left: 0.25rem;">
                      <img
                        style="width:100%;height:100%;object-fit: cover;"
                        src="../../assets/imgs/wode/QQ图片20200929090429.jpg"
                      />
                    </div>

                  <el-button slot="reference">加我微信</el-button>
                </el-popover>
              </div>
            </div>
            <div @click="display" class="wxgirl-close">
              <img src="../../assets/imgs/wode/empty.png" />
            </div>
          </div>
        </div>
      </div>
      <div style="height: 2rem"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Wode",
  data() {
    return {
      displayThis: true,
    };
  },
  methods: {
    transtoLogin() {
      this.$router.push("/login");
    },
    historyGo() {
      this.$router.go(-1);
    },

    display() {
      this.displayThis = false;
    },
  },
  computed: {
    phone() {
      if (!this.$store.state.phone) {
        return localStorage.getItem("userPhone");
      }
      return this.$store.state.phone;
    },
  },
};
</script>


<style scoped>
a {
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
.headrbar {
  height: 0.8rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}
.main {
  width: 100%;
  height: 3rem;
  background-image: url("../../assets/imgs/wode/backgroundv3.png");
  margin-top: 0.8rem;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.userinformation {
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userinformation-notlogin p,
a {
  font-size: 0.25rem;
}
.userinformation-notlogin-hi {
  color: #fff;
  margin-bottom: 0.3rem;
}
.userinformation-notlogin-gologin {
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  height: 0.7rem;
}
.userinformation-notlogin-gologin a {
  text-decoration: none;
}
.userinformation-notlogin .img {
  position: absolute;
  margin-left: -0.4rem;
  margin-top: -0.5rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
}
.userinformation-notlogin img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.userinformation-notlogin .regist {
  background-color: #fe6600;
  width: 1.2rem;
  position: relative;
  float: right;
  margin-right: 0.4rem;
  height: 0.45rem;
  border-radius: 3rem;
}
.userinformation-notlogin .regist span {
  font-size: 0.22rem;
  color: #ffffff;
  position: absolute;
  margin-top: 0.23rem;
  margin-left: 0.12rem;
}

.panel {
  width: 96%;
  margin: auto;
}
.thefirst {
  margin: -0.3rem auto;
}
.panel-head-title {
  font-size: 0.3rem;
  height: 0.8rem;
}
.panel-head-right {
  height: 0.8rem;
}
.panel-head-right a {
  position: absolute;
  right: 0.2rem;
  text-decoration: none;
}
.panel-head {
  display: flex;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  position: relative;
}
.order-item {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-item a {
  text-decoration: none;
}
.order-item p {
  font-size: 0.2rem;
  margin-top: 0.1rem;
}
.order-item-icon {
  height: 0.65rem;
  width: 0.65rem;
}
.linkbox-item img {
  width: 0.4rem;
  height: 0.4rem;
}
.panel + .panel {
  margin-top: 0.5rem;
}
.linkbox-item {
  text-align: center;
}
.linkbox-item p {
  font-size: 0.2rem;
  margin-top: 0.35rem;
}
.linkbox-item a {
  display: inline-block;
  text-decoration: none;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.wxgirl {
  background-image: url("../../assets/imgs/wode/wx_service_bg_4.png");
  background-size: 100% 100%;
  padding: 0.3rem 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
}
.wxgirl-img {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.1rem;
  display: inline-block;
}
.wxgirl-img img {
  height: 100%;
  vertical-align: middle;
}
.wxgirl-content {
  font-size: 0.2rem;
  background-image: url("../../assets/imgs/wode/wx_service_text_bg.png");
  height: 1.3rem;
  width: 4.5rem;
  background-size: 100% 100%;
  overflow: hidden;
  line-height: 0.35rem;
  padding: 0.15rem 0.2rem;
  height: 100%;
}
.wxgirl-right-btn {
  font-size: 0.25rem;
  width: 1.4rem;
  height: 0.5rem;
  background-color: rgba(255, 115, 76, 1);
  margin-left: 0.1rem;
  color: #fff;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wxgirl-close img {
  width: 0.3rem;
  height: 0.3rem;
}
.wxgirl-close {
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
}
/* .wode-main::after{
  clear: both;
  display: block;
  content: "";
} */
.el-button{
  border: 0;
  font-size: 0.25rem;
  width: 1.4rem;
  height: 0.5rem;
  background-color: rgba(255, 115, 76, 1);
  margin-left: 0.1rem;
  color: #fff;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>