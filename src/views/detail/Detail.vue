<template>
    <div class="detail">
        <div class="header">
            <div class="row header-item">
                <div
                        @click="historyTo"
                        class="col-xs-3 col-sm-3 el-icon-arrow-left"
                        style="padding-left: 0.2rem"
                ></div>
                <div class="col-xs-6 col-sm-6" style="text-align: center">
                    <span style="font-size: 0.3rem">{{ title }}</span>
                </div>
                <div
                        class="col-xs-1 col-sm-1 el-icon-service"
                        style="text-align: center"
                ></div>
                <div
                        class="col-xs-2 col-sm-2"
                        style="text-align: center; padding-left: 0.3rem"
                >
                    <el-dropdown trigger="click">
            <span class="el-dropdown-link" style="font-size: 0.4rem">
              <a class="el-icon-s-fold"></a>
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
            </div>
        </div>
        <div class="nav row">
            <div class="col-xs-3 col-md-3 nav-item">
        <span
                @click="
            activeIndex = 0;
            productByZhongHe();
          "
                :class="{ activeTitleClass: activeIndex === 0 ? true : false }"
        >综合</span
        >
            </div>
            <div class="col-xs-3 col-md-3 nav-item">
        <span
                @click="
            activeIndex = 1;
            produceSortByNum();
          "
                :class="{ activeTitleClass: activeIndex === 1 ? true : false }"
        >销量</span
        >
            </div>
            <div class="price col-xs-3 col-md-3 nav-item">
        <span
                @click="
            changePriceIcon();
            activeIndex = 2;
            sortByPrice();
          "
                :class="{ activeTitleClass: activeIndex === 2 ? true : false }"
        >价格
          <div v-if="activeIndex === 2" class="img">
            <div v-show="showPriceIconUp">
              <img src="~assets/imgs/icons/jiantou-up.svg" />
            </div>
            <div v-show="showPriceIconDown">
              <img src="~assets/imgs/icons/jiantou-down.svg" />
            </div>
          </div>
        </span>
            </div>
            <div class="col-xs-3 col-md-3 nav-item">
        <span
                @click="
            activeIndex = 3;
            sortByNew();
          "
                :class="{ activeTitleClass: activeIndex === 3 ? true : false }"
        >新品</span
        >
            </div>
        </div>
        <div class="img-item">
            <div
                    class="img-item-wraper"
                    v-for="(item, index) in productList[activeProductIndex]"
                    :key="index"
            >
                <div class="img">
                    <img :src="require('../../assets/imgs/' + item.src)" />
                </div>
                <div v-if="item.title" class="title">
                    <span>{{ item.title }}</span>
                </div>
                <div class="describ">
                    <span>{{ item.describ }}</span>
                </div>
                <div class="price">
                    <span>¥{{ item.price1 }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data() {
            return {
                title: "",
                showPriceIconUp: false,
                showPriceIconDown: false,
                descSort: true,
                activeProductIndex: 0,
                productList: [
                    [
                        {
                            id: 1,
                            src: "9010966.jpg_220x240.jpg",
                            title: "一往情深",
                            describ: "精品玫瑰礼盒：19支红...",
                            text: "年度销售冠军!",
                            text2: "经典爆款，年销售冠军!",
                            price1: 239,
                            price2: 315,
                            num: 12800,
                        },
                        {
                            id: 2,
                            src: "9012471.jpg_220x240.jpg",
                            title: "你是唯一",
                            describ: "卡罗拉红玫瑰11支",
                            text: "11支热销款",
                            text2: "11支新品，一心一意的爱",
                            price1: 138,
                            price2: 189,
                            num: 46000,
                        },
                        {
                            id: 3,
                            src: "9012474.jpg_220x240.jpg",
                            title: "韩式系列/亲爱的你",
                            describ: "粉佳人玫瑰16支，百合...",
                            text: "全新韩式系列",
                            text2: "花艺师打造 韩式华语系列",
                            price1: 369,
                            price2: 469,
                            num: 17000,
                        },
                        {
                            id: 4,
                            src: "9012243.jpg_220x240.jpg",
                            title: "恋恋情深",
                            describ: "11支香槟玫瑰，白色多头",
                            text: "百合2支",
                            text2: "经典款式 简约设计",
                            price1: 196,
                            price2: 255,
                            num: 79000,
                        },
                        {
                            id: 5,
                            src: "9012177.jpg_220x240.jpg",
                            title: "不变的承诺",
                            describ: "99支红玫瑰",
                            text: "经典99支",
                            text2: "经典99支，鼎力推荐!",
                            price1: 568,
                            price2: 689,
                            num: 66000,
                        },
                        {
                            id: 6,
                            src: "9012154.jpg_220x240.jpg",
                            title: "甜美公主",
                            describ: "白玫瑰22支，粉佳人粉玫瑰14支",
                            text2: "甜美设计 清新典雅",
                            price1: 369,
                            price2: 485,
                            num: 25000,
                        },
                        {
                            id: 7,
                            src: "9012009.jpg_220x240.jpg",
                            title: "忘情巴黎",
                            describ: "33支红玫瑰",
                            text: "畅销爆款",
                            text2: "浪漫唯美，女神挚爱",
                            price1: 298,
                            price2: 382,
                            num: 71000,
                        },
                        {
                            id: 8,
                            src: "9012474.jpg_220x240.jpg",
                            title: "韩式系列/慢慢喜欢你",
                            describ: "爱莎玫瑰16支",
                            text: "全新爱莎玫瑰",
                            text2: "全新韩式系列 珍品玫瑰",
                            price1: 239,
                            price2: 329,
                            num: 1962,
                        },
                        {
                            id: 9,
                            src: "9012452.jpg_220x240.jpg",
                            title: "韩式系列/一路向西",
                            describ: "向日葵3支,香槟玫瑰9...",
                            text: "全新韩式系列",
                            text2: "花艺师打造 韩式花束系列",
                            price1: 296,
                            price2: 398,
                            num: 66000,
                        },
                        {
                            id: 10,
                            src: "9012189.jpg_220x240.jpg",
                            title: "恩情无限",
                            describ: "粉色康乃馨10支，百合2支",
                            text: "人气推荐",
                            text2: "精选花材",
                            price1: 178,
                            price2: 232,
                            num: 15000,
                        },
                        {
                            id: 11,
                            src: "9012440.jpg_220x240.jpg",
                            title: "星河璀璨",
                            describ: "香槟玫瑰9支，蓝绣球...",
                            text: "9折优惠",
                            text2: "倾情设计 9折特惠",
                            price1: 262,
                            price2: 376,
                            num: 4172,
                        },
                        {
                            id: 12,
                            src: "9012095.jpg_220x240.jpg",
                            title: "幸福绽放",
                            describ: "粉色康乃馨19支",
                            text2: "温暖之选 亮丽花色 特价",
                            price1: 165,
                            price2: 215,
                            num: 16000,
                        },
                        {
                            id: 13,
                            src: "9012332.jpg_220x240.jpg",
                            title: "留住好时光",
                            describ: "粉绣球一支，粉雪山玫瑰...",
                            text: "热卖推荐",
                            text2: "精选昆明A级花材",
                            price1: 245,
                            price2: 306,
                            num: 12000,
                        },
                        {
                            id: 14,
                            src: "9012095.jpg_220x240.jpg",
                            title: "幸福万年长",
                            describ: "红色康乃馨66支，白边...",
                            text: "精选优品",
                            text2: "温暖花束 幸福万年长",
                            price1: 346,
                            price2: 486,
                            num: 3956,
                        },
                    ],
                    [
                        {
                            id: 1,
                            src: "1073263.jpg_220x240.jpg",
                            title: "创意新品",
                            describ: "永生花满月艺术台灯/朦...",
                            price1: 398,
                            price2: 498,
                            num: 483,
                        },
                        {
                            id: 2,
                            src: "1073264.jpg_220x240.jpg",
                            title: "创意新品",
                            describ: "一鹿(路)有你永生花小...",
                            price1: 288,
                            price2: 388,
                            num: 962,
                        },
                        {
                            id: 3,
                            src: "1073256.jpg_220x240.jpg",
                            title: "新款新型项链",
                            describ: "我如此爱你-施华洛世奇...",
                            price1: 1190,
                            price2: 1590,
                            num: 69,
                        },
                        {
                            id: 4,
                            src: "1073276.jpg_220x240.jpg",
                            title: "送老师长辈定制",
                            describ: "花好月圆永生花台灯/送...",
                            price1: 298,
                            price2: 398,
                            num: 583,
                        },
                    ],
                    [
                        {
                            id: 1,
                            src: "5302017.jpg_220x240.jpg",
                            describ: "甜蜜如心(8寸)·元祖鲜奶蛋糕，布丁加水果夹层",
                            price1: 258,
                            price2: 358,
                            num: 3690,
                        },
                        {
                            id: 2,
                            src: "5010040.jpg_220x240.jpg",
                            title: "生日特惠",
                            describ: "多彩生活·2磅(8寸)水果蛋糕",
                            price1: 179,
                            price2: 209,
                            num: 5862,
                        },
                        {
                            id: 3,
                            src: "5221035.jpg_220x240.jpg",
                            describ: "深爱（1磅）+方形蜡烛·水果夹层蛋糕",
                            price1: 276,
                            price2: 376,
                            num: 270,
                        },
                        {
                            id: 4,
                            src: "5211001.jpg_220x240.jpg",
                            describ: "新排行榜COOL酪(1.5磅)·乳酪蛋糕",
                            price1: 358,
                            price2: 458,
                            num: 723,
                        },
                    ],
                    [
                        {
                            id: 1,
                            src: "3090050.jpg_220x240.jpg",
                            describ: "香港元朗荣华低糖双黄白莲蓉...",
                            title: "健康低糖",
                            price1: 188,
                            price2: 238,
                            num: 259,
                        },
                        {
                            id: 2,
                            src: "1065046.jpg_220x240.jpg",
                            title: "灯光蓝牙音响",
                            describ: "麋鹿水晶音乐盒/旋转蓝牙音箱...",
                            price1: 296,
                            price2: 396,
                            num: 311,
                        },
                        {
                            id: 3,
                            src: "1076062.jpg_220x240.jpg",
                            title: "火热畅销款",
                            describ: "星期耳钉礼盒·s925银个性耳钉",
                            price1: 239,
                            price2: 369,
                            num: 1969,
                        },
                        {
                            id: 4,
                            src: "1061006.jpg_220x240.jpg",
                            title: "热卖推荐",
                            describ: "999纯金箔玫瑰+陶瓷花瓶...",
                            price1: 138,
                            price2: 256,
                            num: 35000,
                        },
                    ],
                ],

                activeIndex: 0,
            };
        },
        mounted() {
            this.title = this.$route.query.path;
            if (this.title === "鲜花") {
                this.activeProductIndex = 0;
            }
            if (this.title === "永生花") {
                this.activeProductIndex = 1;
            }
            if (this.title === "蛋糕") {
                this.activeProductIndex = 2;
            }
            if (this.title === "礼品") {
                this.activeProductIndex = 3;
            }
        },
        methods: {
            changePriceIcon() {
                if (!this.showPriceIconDown) {
                    this.showPriceIconDown = !this.showPriceIconDown;
                    this.showPriceIconUp = false;
                } else {
                    this.showPriceIconUp = !this.showPriceIconUp;
                    this.showPriceIconDown = false;
                }
            },

            historyTo() {
                window.history.go(-1);
            },
            produceSortByNum() {
                this.productList[this.activeProductIndex].sort(this.descComp("num"));
            },
            descComp(attr) {
                return function (a, b) {
                    let val1 = a[attr];
                    let val2 = b[attr];
                    return val2 - val1;
                };
            },
            ascComp(attr) {
                return function (a, b) {
                    let val1 = a[attr];
                    let val2 = b[attr];
                    return val1 - val2;
                };
            },
            productByZhongHe() {
                this.productList[this.activeProductIndex].sort(this.ascComp("id"));
            },
            sortByPrice() {
                this.descSort
                    ? this.productList[this.activeProductIndex].sort(
                    this.descComp("price1")
                    )
                    : this.productList[this.activeProductIndex].sort(
                    this.ascComp("price1")
                    );
                this.descSort = !this.descSort;
            },
            sortByNew() {
                this.productList[this.activeProductIndex].sort(this.descComp("id"));
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
        color: #000000;
    }
    a:link,
    a:visited,
    a:hover,
    a:active {
        text-decoration: none;
    }

    .activeTitleClass {
        color: #ff734c;
    }

    .header-item {
        display: flex;
        align-items: center;
    }

    .header {
        font-size: 0.4rem;
        line-height: 1.4;
        margin-top: 0.2rem;
    }
    .header img {
        width: 0.5rem;
        height: 0.5rem;
    }
    .header .row div:first-child {
    }

    .nav {
        font-size: 0.25rem;
        margin-top: 0.6rem;
        border-bottom: solid 1px #e9ecf0;
        padding-bottom: 0.3rem;
    }

    .nav-item {
        text-align: center;
    }

    .nav .price {
    }

    .nav .price img {
        width: 0.2rem;
        height: 0.2rem;
    }
    .nav .price .img {
        position: absolute;
        margin-left: 1.2rem;
        margin-top: -0.1rem;
    }
    .img-item {
        background-color: #e9ecf0;
        /*padding-top: .2rem;*/
    }

    .img-item .img-item-wraper {
        font-size: 0.2rem;
        line-height: 1.4;
        background-color: #ffffff;
        margin-top: 0.2rem;
        border-radius: 5px;
        padding-bottom: 0.2rem;
        width: 48%;
        display: inline-block;
        margin: 0.1rem 0.07rem;
        border-radius: 0.1rem;
        overflow: hidden;
    }
    .img-item img {
        width: 100%;
    }
    .img-item-wraper .title {
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        margin-left: 0.1rem;
    }
    .img-item-wraper .title span {
        border: 1px solid #ff734c;
        color: #ff734c;

        padding-left: 0.2rem;
        border-radius: 2rem;
        padding-right: 0.2rem;
        font-size: 0.18rem;
        text-align: center;
    }
    .img-item-wraper .describ {
        font-weight: 300;
        margin-left: 0.1rem;
    }

    .img-item-wraper .price {
        margin-left: 0.1rem;
        color: #ff734c;
        font-size: 0.28rem;
        font-weight: 500;
        margin-left: 0.1rem;
        line-height: 2;
    }
</style>