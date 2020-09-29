<template>
  <div class="fastival-banner" style="margin-bottom: 0.2rem;">
    <div class="zhongqiu">
      <div class="big-guanggao">
        <img src="~assets/imgs/20_zhongqiu_mbanner_m.jpg" />
      </div>
      <div class="zhongqiu-item-wraper container">
        <div class="zhongqiu-item row">
          <div>
            <div class="text col-xs-4 col-sm-4">
              <div>热销花篮</div>
              <div>+月饼组合</div>
              <div>￥299</div>
            </div>
            <div class="col-xs-2 col-sm-2 col-xs-pull-1 col-sm-pull-1">
              <img src="~assets/imgs/9012333.jpg" />
            </div>
          </div>

          <div>
            <div class="text col-xs-4 col-sm-4">
              <div>中秋月饼礼盒</div>
              <div>月朗荣华</div>
              <div>￥198</div>
            </div>
            <div class="col-xs-2 col-sm-2 col-xs-pull-1 col-sm-pull-1">
              <img src="~assets/imgs/3090092.jpg" />
            </div>
          </div>
        </div>

        <div class="zhongqiu-item row">
          <div class="text col-xs-4 col-sm-4">
            <div>团圆鲜花</div>
            <div>馨情无限</div>
            <div>￥237</div>
          </div>
          <div class="col-xs-2 col-sm-2 col-xs-pull-1 col-sm-pull-1">
            <img src="~assets/imgs/9012201.jpg" />
          </div>
          <div class="text col-xs-4 col-sm-4">
            <div>口碑好礼</div>
            <div>花好月圆永生花</div>
            <div>￥298</div>
          </div>
          <div class="col-xs-2 col-sm-2 col-xs-pull-1 col-sm-pull-1">
            <img src="~assets/imgs/1073269.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="scene">
      <div class="modetitle">
        <span>一秒选花</span>
      </div>
      <div class="scene-list">
        <div class="scene-list-item">
          <div>
            <img src="~assets/imgs/m_home_use_lover.png" />
          </div>
          <div>
            <span>送恋人</span>
          </div>
        </div>
        <div class="scene-list-item">
          <div>
            <img src="~assets/imgs/m_home_use_elder.png" />
          </div>
          <div>
            <span>送长辈</span>
          </div>
        </div>

        <div class="scene-list-item">
          <div>
            <img src="~assets/imgs/m_home_use_friends.png" />
          </div>
          <div>
            <span>送朋友</span>
          </div>
        </div>
      </div>
    </div>
    <div class="scene2">
      <div class="scene2-item">
        <div>
          <span>生日祝福</span>
        </div>
        <div>
          <img src="~assets/imgs/m_home_use_birthday2.png" />
        </div>
      </div>
      <div class="scene2-item">
        <div>
          <span>表白结婚</span>
        </div>
        <div>
          <img src="~assets/imgs/m_home_use_profess2.png" />
        </div>
      </div>
      <div class="scene2-item">
        <div>
          <span>开业商务</span>
        </div>
        <div>
          <img src="~assets/imgs/m_home_use_business2.png" />
        </div>
      </div>
      <div class="scene2-item">
        <div>
          <span>周年纪念</span>
        </div>
        <div>
          <img src="~assets/imgs/m_home_use_anniversary2.png" />
        </div>
      </div>
    </div>
    <div class="scene3 row">
      <div
        class="scene3-item col-xs-6 col-sm-6"
        style="background-image: url(https://img02.hua.com/m/home/img/m_home_ranklist2.png);"
      >
        <div class="col-xs-6 col-sm-6">
          <div>
            <span>热销版</span>
          </div>
          <div>
            <span>万千宠爱</span>
          </div>
          <div>
            <span>大家都在买</span>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6">
        </div>
      </div>
      <div
        class="scene3-item col-xs-6 col-sm-6"
        style="background-image: url(https://img02.hua.com/m/home/img/m_home_special2.png);"
      >
        <div class="col-xs-6 col-sm-6">
          <div>
            <span>特价专区</span>
          </div>
          <div>
            <span>超值好货</span>
          </div>
          <div style="width:100%">
            <span>限时直降</span>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6">
        </div>
      </div>
    </div>

    <div class="scene4" style="padding: 0 0.05rem;">
      <div class="scene4-item">
        <div>
          <img src="~assets/imgs/xinpinlaixi.jpg" />
        </div>
        <div>
          <span>新品来袭</span>
        </div>
      </div>
      <div class="scene4-item">
        <div>
          <img src="~assets/imgs/pinweizhixuan.jpg" />
        </div>
        <div>
          <span>品味之选</span>
        </div>
      </div>

      <div class="scene4-item">
        <div>
          <img src="~assets/imgs/shejishizhenxuan.jpg" />
        </div>
        <div>
          <span>设计师甄选</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FestivalBanner",
};
</script>

<style scoped>
.zhongqiu-item-wraper {
  background-color: #a8232b;
  padding-bottom: 0.1rem;
}
.zhongqiu .big-guanggao img {
  width: 100%;
}
.zhongqiu-item {
  background-color: #ffffff;
  margin-top: 0.1rem;
}

.zhongqiu .zhongqiu-item img {
  width: 1.5rem;
  height: 1.5rem;

  /*height: 50%;*/
}

.zhongqiu-item .wraper {
  background-color: #ffffff;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
}
.zhongqiu-item .text {
  font-size: 0.2rem;
  line-height: 1.42857143;
  margin-bottom: 0.3rem;
}
.zhongqiu-item .text div:nth-child(1) {
  font-weight: 400;
  padding-top: 0.2rem;
}
.zhongqiu-item .text div:nth-child(2) {
  font-weight: 300;
  color: #71797f;
}
.zhongqiu-item .text div:last-child {
  font-weight: 500;
  color: #ff734c;
  line-height: 3;
}

.scene .modetitle {
  font-size: 0.3rem;
  color: #232628;
  height: 0.3rem;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}

.scene .scene-list {
  display: inline-flex;
  text-align: center;
}
.scene .scene-list img {
  width: 80%;
}
.scene .scene-list span {
  font-size: 0.25rem;
}
.scene-list .scene-list-item div:last-child {
  /*margin-top: -.45rem;*/
  position: absolute;
  margin-top: -0.8rem;
  margin-left: 0.8rem;
  color: #ffffff;
}

.scene2 {
  display: inline-flex;
  margin-top: 0.3rem;
  padding-right: 0.1rem;
}
.scene2 .scene2-item span {
  font-size: 0.25rem;
  position: absolute;
  margin-top: 0.2rem;
  margin-left: 0.3rem;
}
.scene2 .scene2-item img {
  width: 100%;
  padding-left: 0.1rem;
}

.scene3 {
  margin: 0.3rem 0.1rem 0;
}
.scene3 .scene3-item {
  /*font-size: .2rem;*/
  line-height: 1.42857143;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  border: 1px solid #e9ecf0;
  height: 2.7rem;
  padding: 0.2rem 0;
}
.scene3-item img {
  width: 1.2rem;
  height: 1.2rem;
}

.scene3-item div div:nth-child(1) {
  font-size: 0.25rem;
  font-weight: 400;
}
.scene3-item div div:nth-child(2) {
  font-size: 0.2rem;
  color: #71797f;
}

.scene3-item div div:nth-child(3) {
  font-size: 0.2rem;
  background-color: #ff734c;
  margin-top: 1rem;
  border-radius: 2rem;
  width: 1.5rem;
  text-align: center;
  color: #fff;
}
.scene3-item div:nth-child(2) div:nth-child(2) {
  margin-top: 0.4rem;
  color: black;
}

.scene4 {
  display: inline-flex;
  text-align: center;
  margin-top: 0.2rem;
}
.scene4-item{
  padding: 0 0.05rem;
}
.scene4 .scene4-item span {
  font-size: 0.23rem;
  position: absolute;
  margin-top: 0.24rem;
  color: #ffffff;
  margin-left: -0.4rem;
}
.scene4-item img {
  width: 100%;
}
.scene4-item div:nth-child(2) {
  background-color: #474a4c;
  padding-bottom: 0.2rem;
  height: 0.5rem;
}
</style>