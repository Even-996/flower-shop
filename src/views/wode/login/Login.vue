<template>
  <div style="width: 100%; overflow: hidden">
    <header class="headrbar">
      <div class="headerbar-left col-md-3 col-xs-3">
        <a href="/wode" class="glyphicon glyphicon-menu-left"></a>
      </div>
      <div class="headerbar-center col-md-6 col-xs-6">
        <p class="headerbar-content">登录注册</p>
      </div>
      <div class="headerbar-right col-md-3 col-xs-3">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <a class="glyphicon glyphicon-menu-hamburger"></a>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-s-home"
            ><a href="/home">首页</a></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-search"
            ><a href="/category">分类搜索</a></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-shopping-cart-full"
            ><a href="/cart">购物车</a></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-loading"
            ><a href="/wode">我的</a></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <div class="huaLogo">
      <img src="../../../assets/imgs/wode/wx_login_logo.png" />
    </div>
    <div class="logins">
      <div class="login-item">
        <div class="login-item-title">手机号</div>
        <div class="login-item-info">
          <input type="tel" v-model="phone" placeholder="请输入手机号" autocomplete="off" />
        </div>
      </div>
      <div class="login-item">
        <div class="login-item-title">验证码</div>
        <div class="login-item-info">
          <input type="tel" v-model="code" placeholder="请输入验证码" autocomplete="off" />
          <a >
            <span v-if="getYanZheng"  @click="sendPhoneNum">获取验证码</span>
            <span style=""  v-else>{{countNum}}秒后重发</span>
          </a>
        </div>
      </div>
      <button @click="sendUserInfoCheck" class="to-login">手机登录/注册</button>
      <div  class="login-by-password">账号密码登录</div>
    </div>
    <div class="quick">
      <div class="quick-tips">其他登录方式</div>
    </div>
    <div class="quick-login row">
      <div class="quick-login-item col-md-4 col-xs-4">
        <img src="../../../assets/imgs/wode/iconfont-qq.png" />
        <span>QQ</span>
      </div>
      <div class="quick-login-item col-md-4 col-xs-4">
        <img src="../../../assets/imgs/wode/iconfont-zhifubao.png" />
        <span>支付宝</span>
      </div>
      <div class="quick-login-item col-md-4 col-xs-4">
        <img src="../../../assets/imgs/wode/youxiang .png" />
        <span>邮箱注册</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {sendPhone,sendPhoneAndCode} from "../../../network/login";
  const  qs  = require('qs');
  export default {
    name: "Login",
    data(){
      return{
        phone:'',
        code: '',
        getYanZheng: true,
        countNum: 60,
      }
    },
    methods:{
       sendPhoneNum(){

          sendPhone(this.phone).then(res=>{
            // this.$message.success("发送验证码成功");

            // //验证手机号
            // var phonenum = this.phone;
            // var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            // if(!reg.test(phonenum)){
            //   alert('请输入有效的手机号码！');
            //
            // }

            this.getYanZheng = false;
            setTime();

            let _this = this;
            let count = 60;
            function setTime() {
              if(count == 1){
                _this.getYanZheng = true;
                return;
              }else{
                count --;
              }

              setTimeout(function () {
                setTime()
                _this.countNum = count;
              },1000);
            }



          }).catch(err =>{
            this.$message.error("发送验证码失败");
          })
       },
      sendUserInfoCheck(){

        sendPhoneAndCode(this.phone,this.code).then(res=>{
            if(res){
              this.$store.state.phone = this.phone;
              localStorage.setItem("userPhone",this.phone);
              this.$router.push("/wode");
            }else{
              this.$message.error("登录失败，验证码错误");
            }

        }).catch(err =>{
          this.$message.error("登录失败，验证码错误");
        })
      },

    },
    computed:{

    }
  };

</script>

<style scoped>
  @import "../../../assets/css/Login.css";
</style>