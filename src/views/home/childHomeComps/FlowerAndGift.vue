<template>
    <div class="flowerandgift ">
              <div @click="transToDetail(item.path)" class="item-wraper" v-for="(item,index) in itemList" :key="index">
                  <div>
                      <img :src="require('../../../assets/imgs/'+ item.src)">
                  </div>
                  <div>
                      <span>{{item.title}}</span>

                  </div>

              </div>


    </div>
</template>

<script>
    export default {
        name: "FlowerAndGift",
        data(){
            return{
                itemList:[
                    {src:'m_home_category_flower.png',title:'鲜花',path:'鲜花'},
                    {src:'m_home_category_ppf.png',title:'永生花',path:'永生花'},
                    {src: 'm_home_category_cake.png',title:'蛋糕',path:'蛋糕'},
                    {src:'m_home_category_gift.png',title:'礼品',path:'礼品'},
                    {src:'m_home_category_group2.png',title:'企业团购'}
                ]
            }
        },
        methods:{
            transToDetail(path){
                this.$router.push({
                    path: '/detail',
                    query:{
                        path
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .flowerandgift{
      display: flex;
      font-size: 50px;
  }
  .flowerandgift .item-wraper{
      flex: 1;
      height: 1.2rem;

      text-align: center;


  }
  .flowerandgift .item-wraper img{
      width: 50%;
      height: 80%;

  }
  .flowerandgift .item-wraper span{
      font-size: .24rem;
      /*line-height: 5;*/
  }

  .flowerandgift .item-wraper div{
      /*margin-bottom: -.5rem;*/
  }
    .flowerandgift .item-wraper {
    }

</style>