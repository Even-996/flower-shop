<template>
    <div class="footer-info">
        <div class="big-img">
            <img src="~assets/imgs/m_home_qiyetuangou.png">
        </div>
        <div class="text-info">
            <div class="row" style="margin-right: 0;">
                <div class="col-xs-3 col-sm-3 info-item"><button>企业团购</button></div>
                <div class="col-xs-3 col-sm-3 info-item"><button>设计师款</button></div>
                <div class="col-xs-3 col-sm-3 info-item"><button>同城鲜花</button></div>
                <div class="col-xs-3 col-sm-3 info-item"><button>华语大全</button></div>
                <div class="col-xs-3 col-sm-3 info-item"><button>花礼优势</button></div>
                <div class="col-xs-3 col-sm-3 info-item"><button>勇敢爱</button></div>
                <div class="col-xs-3 col-sm-3 info-item"><button>常见问题</button></div>
                <div class="col-xs-3 col-sm-3 info-item"><button>关于我们</button></div>
            </div>
        </div>
        <div class="footer-img row" style="margin-right: 0;">
            <div class="phone col-xs-3 col-sm-3 col-xs-offset-3 col-sm-offset-3 ">
                 <div>
                     <img src="~assets/imgs/wode/kehuduan.svg">
                 </div>
                <div><span>客户端</span></div>
            </div>
            <div class="kefu-img col-xs-3 col-sm-3">
                <div>
                    <img src="~assets/imgs/wode/sevice.png">
                </div>
                <div>
                    <span>客服</span>
                </div>
            </div>
        </div>
        <p class="footer-copyright">Copyright © 2005~2020 花礼网（中国鲜花礼品网）版权所有<br>中国鲜花网领先品牌，鲜花速递专家！<br>深圳市百易信息技术有限公司  粤ICP备09171662号</p>
    </div>
</template>

<script>
    export default {
        name: "FooterInfo"
    }
</script>

<style scoped>
  .footer-info .big-img img{
      width: 100%;
      height: 100%;
  }
    .footer-info .text-info{
        font-size: .23rem;
        line-height: 1.42857143;
        margin-left: .2rem;
    }
    .footer-info .text-info button{
        background-color: #E9ECF0;
        border: solid 1px #E9ECF0;
        margin-top: .3rem;
        height: .6rem;
    }

    .footer-img{
        font-size: 0;
        margin-top: .3rem;
        text-align: center;
    }


    .footer-img .phone div:last-child{
        margin-top: .2rem;
    }
    .footer-img .kefu-img div:last-child{
        margin-top: .2rem;
    }

    .footer-img img{
        width: 0.4rem

    }
    .footer-img span{
       font-size: .24rem;


    }

    .footer-copyright{
        padding: .4rem 0;
        font-size: 0.22rem;
        color: #B4BABF;
        text-align: center;
        line-height: 1.4;
    }
    .info-item{
        text-align: center;
    }
</style>