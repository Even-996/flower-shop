<template>
    <tab-bar class="tab-bar">
        <tab-bar-item path="/home">
            <img slot="item-icon" src="~assets/imgs/tabbar/home.png" />
            <img slot="item-icon-active" src="~assets/imgs/tabbar/home1.png" />
            <div slot="item-text"><span>首页</span></div>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <img slot="item-icon" src="~assets/imgs/tabbar/iconfont-category1.png" />
            <img
                    slot="item-icon-active"
                    src="~assets/imgs/tabbar/iconfont-categoryfill.png"
            />
            <div slot="item-text"><span>分类</span></div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img slot="item-icon" src="~assets/imgs/tabbar/shop-cart.png" />

            <img slot="item-icon-active" src="~assets/imgs/tabbar/shop-cart1.png" />
            <div slot="item-text">
                <div v-if="cartNum" class="num-icon">
                    {{ cartNum }}
                </div>
                <span>购物车</span>
            </div>
        </tab-bar-item>
        <tab-bar-item path="/wode">
            <img slot="item-icon" src="~assets/imgs/tabbar/iconfont-smile.png" />
            <img
                    slot="item-icon-active"
                    src="~assets/imgs/tabbar/iconfont-smile1.png"
            />
            <div slot="item-text"><span>我的</span></div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "../common/tabbar/TabBar";
    import TabBarItem from "../common/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        components: {
            TabBarItem,
            TabBar,
        },
        data() {
            return {
                // cartNum: 0
            };
        },
        created() {
            this.loadCartNum();
        },
        mounted() {},
        computed: {
            cartNum() {
                if (!this.$store.state.cartNum) {
                    if (localStorage.getItem("carts"))
                        return JSON.parse(localStorage.getItem("carts")).length;
                    else return 0;
                } else {
                    return this.$store.state.cartNum;
                }
            },
        },
        methods: {
            loadCartNum() {
                // this.cartNum = JSON.parse(localStorage.getItem("carts")).length;
            },
        },
    };
</script>

<style scoped>
    .tab-bar {
        z-index: 9;
    }
    .tab-bar body {
        line-height: 0 !important;
    }

    .tab-bar .num-icon {
        color: #fff;
        background: #ff734c;
        font-size: 0.1rem;
        line-height: 0.3rem;
        position: absolute;
        margin-left: 1.2rem;
        margin-top: -0.6rem;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
    }
</style>