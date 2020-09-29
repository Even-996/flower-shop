<template>
    <div class="category">
        <div class="search">
            <div class="search-text">
                <div class="el-icon-search" style="margin: 0 0.2rem 0 0.3rem"></div>
                <div class="span">
                    <span style="font-size: 0.25rem">搜索鲜花、蛋糕、礼品</span>
                </div>
            </div>
        </div>
        <div class="menu row" style="margin-right: 0;">
            <div class="left-menu col-xs-3 col-sm-3">
                <div
                        @click="changLeftMenuStyle(index)"
                        :class="{ activeLeftMenu: index === activeIndex ? true : false }"
                        v-for="(item, index) in leftMenuList"
                        :key="index"
                        class="LeftMenu"
                >
                    <span>{{ item }}</span>
                </div>
            </div>
            <div class="right-menu col-xs-9 col-sm-9 col-xs-push-3 col-sm-push-3">
                <div
                        class="right-menu-wraper"
                        v-for="(item, index) in rightMenuListAll[activeIndex]"
                        :key="index"
                >
                    <div v-if="item.bigImg" class="big-img">
                        <img
                                :src="require('../../assets/imgs/categories/' + item.bigImg)"
                        />
                    </div>
                    <div class="title">
                        <span v-if="item.title">{{ item.title }}</span>
                        <div class="describe el-icon-trophy" v-if="item.describ">
                            <span>{{ item.describ }}</span>
                        </div>
                    </div>
                    <div class="img-item row">
                        <div
                                class="item col-xs-4 col-sm-4"
                                v-for="(item2, index2) in item.srcText"
                                :key="index2"
                        >
                            <div>
                                <img
                                        :src="require('../../assets/imgs/categories/' + item2.src)"
                                />
                            </div>
                            <div v-if="item2.text">
                                <span>{{ item2.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data() {
            return {
                leftMenuList: [
                    "热门推荐",
                    "鲜花",
                    "永生花",
                    "蛋糕",
                    "特色礼品",
                    "礼蓝",
                    "绿植花卉",
                ],

                rightMenuListAll: [
                    [
                        {
                            title: "",
                            describ: "",
                            bigImg: "20_zhongqiu_all.jpg",
                            srcText: [
                                {
                                    src: "m_category_hot_lover.png",
                                    text: "送恋人鲜花",
                                },
                                {
                                    src: "m_category_hot_elder.png",
                                    text: "送长辈鲜花",
                                },
                                {
                                    src: "m_category_hot_birthday.png",
                                    text: "生日鲜花",
                                },
                                {
                                    src: "m_category_hot_boxedflowers.png",
                                    text: "礼盒鲜花",
                                },
                                {
                                    src: "m_category_ppf_sort_box.png",
                                    text: "永生花",
                                },
                                {
                                    src: "m_category_hot_cake.png",
                                    text: "蛋糕",
                                },
                                {
                                    src: "m_category_hot_cake_ganso.png",
                                    text: "元祖蛋糕",
                                },
                                {
                                    src: "m_category_hot_goldfoilflower.png",
                                    text: "金箔花",
                                },
                                {
                                    src: "m_category_hot_jewelry.png",
                                    text: "首饰",
                                },
                                {
                                    src: "m_category_gift_sort_chocolates.png",
                                    text: "巧克力",
                                },
                                {
                                    src: "m_category_hot_creativegifts.png",
                                    text: "创意礼品",
                                },
                                {
                                    src: "m_category_hot_groupbuy.png",
                                    text: "企业团购",
                                },
                            ],
                        },
                    ],
                    [
                        {
                            title: "对象",
                            describ: "鲜花排行榜",
                            bigImg: "flower.png",
                            srcText: [
                                {
                                    src: "m_category_flowers_use_all.png",
                                    text: "全部",
                                },
                                {
                                    src: "m_category_flowers_use_1-2girlfriend.png",
                                    text: "送女友鲜花",
                                },
                                {
                                    src: "m_category_flowers_use_boyfriend.png",
                                    text: "送男性鲜花",
                                },
                                {
                                    src: "m_category_flowers_use_elder.png",
                                    text: "送长辈鲜花",
                                },
                                {
                                    src: "m_category_flowers_use_friend.png",
                                    text: "送朋友鲜花",
                                },
                            ],
                        },
                        {
                            title: "场合",
                            describ: "",
                            srcText: [
                                {
                                    src: "m_category_hot_lover.png",
                                    text: "爱情鲜花",
                                },
                                {
                                    src: "m_category_hot_birthday.png",
                                    text: "生日鲜花",
                                },
                                {
                                    src: "m_category_flowers_occ_visit.png",
                                    text: "探望慰问",
                                },
                                {
                                    src: "m_category_flowers_occ_congratulate.png",
                                    text: "祝福庆贺",
                                },
                                {
                                    src: "m_category_flowers_occ_wedding.png",
                                    text: "婚庆鲜花",
                                },
                                {
                                    src: "m_category_flowers_occ_apologize.png",
                                    text: "道歉鲜花",
                                },
                                {
                                    src: "m_category_flowers_occ_grief.png",
                                    text: "哀思鲜花",
                                },
                                {
                                    src: "m_category_flowers_occ_gat.png",
                                    text: "港澳台鲜花",
                                },
                            ],
                        },
                        {
                            title: "花材",
                            describ: "",
                            srcText: [
                                {
                                    src: "m_category_flowers_mat_rose.png",
                                    text: "玫瑰",
                                },
                                {
                                    src: "m_category_flowers_mat_carnation.png",
                                    text: "康乃馨",
                                },
                                {
                                    src: "m_category_flowers_mat_sunflower.png",
                                    text: "向日葵",
                                },
                                {
                                    src: "m_category_flowers_mat_lily.png",
                                    text: "百合",
                                },
                                {
                                    src: "m_category_flowers_mat_hydrangea.png",
                                    text: "绣球",
                                },
                                {
                                    src: "m_category_flowers_mat_tulips.png",
                                    text: "郁金香",
                                },
                                {
                                    src: "m_category_flowers_mat_gerbera.png",
                                    text: "扶郎/太阳花",
                                },
                                {
                                    src: "m_category_flowers_mat_calla.png",
                                    text: "马蹄莲",
                                },
                            ],
                        },
                        {
                            title: "玫瑰颜色",
                            srcText: [
                                {
                                    src: "m_category_flowers_colour_red.png",
                                    text: "红玫瑰",
                                },
                                {
                                    src: "m_category_flowers_colour_pink.png",
                                    text: "粉玫瑰",
                                },
                                {
                                    src: "m_category_flowers_colour_white.png",
                                    text: "白玫瑰",
                                },
                                {
                                    src: "m_category_flowers_colour_purple.png",
                                    text: "紫玫瑰",
                                },
                                {
                                    src: "m_category_flowers_colour_yellow.png",
                                    text: "黄玫瑰",
                                },
                            ],
                        },
                    ],
                    [
                        {
                            title: "对象",
                            describ: "永生花排行",
                            bigImg: "ppf.png",
                            srcText: [
                                {
                                    src: "m_category_flowers_use_all.png",
                                    text: "全部",
                                },
                                {
                                    src: "m_category_ppf_use_girlfriend.png",
                                    text: "送女友",
                                },
                                {
                                    src: "m_category_ppf_use_boyfriend.png",
                                    text: "送男性",
                                },
                                {
                                    src: "m_category_ppf_use_elder.png",
                                    text: "送长辈",
                                },
                                {
                                    src: "m_category_ppf_use_friend.png",
                                    text: "送朋友",
                                },
                            ],
                        },
                        {
                            title: "分类",

                            srcText: [
                                {
                                    src: "m_category_ppf_sort_vase.png",
                                    text: "永生瓶花",
                                },
                                {
                                    src: "m_category_ppf_sort_box.png",
                                    text: "经典花盒",
                                },
                                {
                                    src: "m_category_ppf_sort_special.png",
                                    text: "特色永生花",
                                },
                                {
                                    src: "m_category_ppf_sort_giantrose.png",
                                    text: "巨型玫瑰",
                                },
                            ],
                        },
                    ],
                    [
                        {
                            title: "品牌",
                            describ: "",
                            bigImg: "cake.png",
                            srcText: [
                                {
                                    src: "m_category_cake_xfxb.png",
                                },
                                {
                                    src: "m_category_cake_ganso.png",
                                },
                                {
                                    src: "m_category_cake_mcake.png",
                                },
                                {
                                    src: "m_category_cake_lecake.png",
                                },
                                {
                                    src: "m_category_cake_vcaketop.png",
                                },
                                {
                                    src: "m_category_cake_boncake.png",
                                },
                                {
                                    src: "m_category_cake_waffleboy.png",
                                },
                                {
                                    src: "m_category_cake_micamika.png",
                                },
                                {
                                    src: "m_category_cake_21cake.png",
                                },
                                {
                                    src: "bestcake.png",
                                },
                                {
                                    src: "m_category_cake_cheesecake.png",
                                },
                                {
                                    src: "m_category_cake_cakeboss.png",
                                },
                                {
                                    src: "m_category_cake_pantry.png",
                                },
                                {
                                    src: "m_category_cake_all.png",
                                },
                            ],
                        },
                    ],
                    [
                        {
                            title: "品牌",
                            describ: "",
                            bigImg: "gift.png",
                            srcText: [
                                {
                                    src: "m_category_gift_brand_all.png",
                                },
                                {
                                    src: "m_category_gift_brand_swarovski.png",
                                },
                                {
                                    src: "m_category_gift_brand_glamever.png",
                                },
                                {
                                    src: "m_category_gift_brand_dior.png",
                                },
                                {
                                    src: "m_category_gift_brand_mw.png",
                                },
                                {
                                    src: "m_category_gift_brand_hellokitty.png",
                                },
                            ],
                        },
                        {
                            title: "对象",
                            describ: "",
                            srcText: [
                                {
                                    src: "m_category_gift_use_girlfriend.png",
                                    text: "送女友",
                                },
                                {
                                    src: "m_category_gift_use_boyfriend.png",
                                    text: "送男性",
                                },
                                {
                                    src: "m_category_gift_use_elder.png",
                                    text: "送长辈",
                                },
                                {
                                    src: "m_category_gift_use_friend.png",
                                    text: "送朋友",
                                },
                                {
                                    src: "m_category_gift_use_customer.png",
                                    text: "送客户",
                                },
                                {
                                    src: "m_category_gift_use_teacher.png",
                                    text: "送老师",
                                },
                                {
                                    src: "m_category_gift_use_child.png",
                                    text: "送小孩",
                                },
                                {
                                    src: "m_category_gift_use_leader.png",
                                    text: "送领导",
                                },
                            ],
                        },
                        {
                            title: "分类",
                            describ: "",
                            srcText: [
                                {
                                    src: "m_category_gift_sort_musicbox.png",
                                    text: "音乐盒",
                                },
                                {
                                    src: "m_category_hot_goldfoilflower.png",
                                    text: "金箔花",
                                },
                                {
                                    src: "m_category_gift_sort_3dcrystal.png",
                                    text: "3D水晶内雕",
                                },
                                {
                                    src: "m_category_gift_sort_jewelrybeauty.png",
                                    text: "首饰/美妆",
                                },
                                {
                                    src: "m_category_gift_sort_chocolates.png",
                                    text: "巧克力",
                                },
                                {
                                    src: "m_category_gift_sort_dolls.png",
                                    text: "公仔/睡枕",
                                },
                                {
                                    src: "m_category_gift_sort_homelife.png",
                                    text: "家居生活",
                                },
                                {
                                    src: "m_category_gift_sort_ornamentsothers.png",
                                    text: "摆件/其他",
                                },
                            ],
                        },
                    ],
                    [
                        {
                            title: "",
                            describ: "",
                            bigImg: "hamper.png",
                            srcText: [
                                {
                                    src: "m_category_hamper.png",
                                    text: "礼篮",
                                },
                            ],
                        },
                    ],
                    [
                        {
                            title: "绿植花卉",
                            bigImg: "plants.png",
                            srcText: [
                                {
                                    src: "m_category_flowers_use_all.png",
                                    text: "全部",
                                },
                                {
                                    src: "m_category_plants_green.png",
                                    text: "绿色植物",
                                },
                                {
                                    src: "m_category_plants_potted.png",
                                    text: "盆栽花蕾",
                                },
                                {
                                    src: "m_category_plants_succulent.png",
                                    text: "多肉盆栽",
                                },
                            ],
                        },
                    ],
                ],
                activeIndex: 0,
            };
        },
        methods: {
            changLeftMenuStyle(index) {
                this.activeIndex = index;
            },
        },
        computed: {
            // rightMenuList(){
            //     console.log(JSON.parse(JSON.stringify(this.rightMenuListAll[this.activeIndex])));
            //     return  JSON.parse(JSON.stringify(this.rightMenuListAll[this.activeIndex]));
            // }
        },
    };
</script>

<style scoped>
    .category {
        padding-bottom: 0.7rem;
    }
    .search {
        font-size: 0.3rem;
        color: #71797f;
        height: 0.86rem;
        align-items: center;
        display: flex;
        position: fixed;
        width: 100%;
        z-index: 99;
        background-color: #fff;
        justify-content: center;
        border-bottom: 2px solid #eee;
    }
    .search-text {
        background-color: #eee;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        height: 0.7rem;
        width: 90%;
    }
    .search img {
        width: 0.35rem;
        height: 0.35rem;
    }

    .search .search-img {
        padding-top: 0.15rem;
    }

    .menu {
        border-top: solid 2px #f1f3f6;
    }
    .menu .left-menu {
        border-right: solid 1px #e9ecf0;
        text-align: center;
        height: 10rem;
        position: fixed;
        margin-top: 0.7rem;
        /*z-index: 9;*/
    }
    .LeftMenu {
        margin: 0.4rem 0;
        height: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu .left-menu span {
        font-size: 0.25rem;
    }

    .activeLeftMenu {
        color: #ff734c;
        border-left: solid 2px #ff734c;
    }

    .right-menu-wraper {
        border: solid 1px #f1f3f6;
        box-shadow: 0px 2px 6px 0px #e9ecf0;
        padding-bottom: 0.3rem;
        margin-top: 1rem;
    }

    .right-menu-wraper .big-img img {
        width: 100%;
    }
    .right-menu-wraper .describe {
        font-size: 0.2rem;
        float: right;
        color: #71797f;
        margin-right: 0.2rem;
    }

    .right-menu-wraper .describe img {
        width: 0.3rem;
        height: 0.3rem;
    }

    .right-menu-wraper .title {
        font-size: 0.25rem;
        padding-top: 0.6rem;
        margin-left: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .right-menu-wraper .img-item {
        font-size: 0.2rem;
        line-height: 1.4;
        text-align: center;
        padding: 0 0.1rem;
    }
    .right-menu-wraper .img-item img {
        width: 100%;
    }
    .right-menu-wraper .img-item span {
        line-height: 2;
    }
    .right-menu-wraper .img-item .item {
        margin-top: 0.3rem;
    }
</style>