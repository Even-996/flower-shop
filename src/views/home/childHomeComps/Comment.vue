<template>
    <div class="comment">
        <dl>
            <dd><img src="~assets/imgs/icons/yuangou.svg"><span>认证龙头企业</span></dd>
            <dd><img src="~assets/imgs/icons/yuangou.svg"><span>15年品牌</span></dd>
            <dd><img src="~assets/imgs/icons/yuangou.svg"><span>3小时送花</span></dd>
            <dd><img src="~assets/imgs/icons/yuangou.svg"><span @click="transToCommentDetail">386040条评论</span></dd>
        </dl>

    </div>
</template>

<script>
    export default {
        name: "Comment",
        methods:{
            transToCommentDetail(){

            }
        }
    }
</script>

<style scoped>
  .comment{
    height: .6rem;
    margin-top: .2rem;
  }
  
    .comment dl{
        display: inline-flex;
    }
    .comment  dd{
     line-height: 0 !important;
    }
    .comment dl dd img{
        width: 25%;
    }
    .comment dl dd span{
        font-size: .2rem;
        position: absolute;
        line-height: 2.5;
    }


</style>