<template>
    <div class="tab-bar-item" @click="itemClick">
<!--      <div class="tab-bar-item">-->
        <!--            <img src="../../assets/images/tabbar/home.svg" alt="">-->
        <!--                        <div>首页</div>-->
        <!--            </div>-->
        <div v-if="!isActive"> <slot name="item-icon"></slot>

        </div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div class="span" :style="activeStyle" ><slot name="item-text"></slot></div>
    </div>
</template>

        <script>
            export default {
                name: "TabBarItem",
                props: {
                    path: String,
                    activeColor: {
                        type: String,
                        default: '#FF734C'
                    }
                },
                data(){
                    return{
                        // isActive: true
                    }
                },
                computed:{
                    isActive(){
                        return this.$route.path.indexOf(this.path) == -1? false: true;
                    },
                    activeStyle(){
                        return this.isActive ? {color: this.activeColor} : {}
                    },
                    cartNum(){
                        return this.$store.state.cartNum;
                    }
                },
                methods: {
                    itemClick(){
                        this.$router.push(this.path)
                    }
                }
            }
        </script>

        <style scoped>

            .tab-bar-item{
                flex: 1;
                text-align: center;
                height: 60px;
            }
            .tab-bar-item img{
                width: 30px;
                height: 30px;
            }

            .tab-bar-item .span{
                font-size: 15px;
                line-height: 2;
            }


        </style>
