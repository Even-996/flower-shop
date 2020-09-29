<template>
  <div class="pay">
    <div class="checkout-steps" id="payVm">
      <div class="fl weixin">微信支付</div>
      <div class="fl sao">
        <p class="red">二维码已过期，刷新页面重新获取二维码。</p>
        <div class="fl code" style="display:inline-block">
          <div id="qrcode"></div>
          <div class="saosao">
            <p>请使用微信扫一扫</p>
            <p>扫描二维码支付</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getErWeiMa } from "../../network/pay";
import QRCode from "qrcodejs2";
export default {
  name: "Pay",
  data() {
    return {
      orderId: "123456",
    };
  },
  created() {
    // 获取请求链接
    getErWeiMa(this.orderId).then(() => {
      new QRCode(document.getElementById("qrcode"), {
        text: "http://www.runoob.com",
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.checkout-steps {
  font-size: 0.2rem;
  line-height: 1.4rem;
}

.checkout-steps {
  border: solid 1px #e6e6e6;
}

.weixin{
    text-align: center;
    font-size: 0.35rem;
}
.sao{
    text-align: center;
}
</style>