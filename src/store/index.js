
import Vue from  'vue'
import Vuex from  'vuex'

//1安装插件
Vue.use(Vuex)



//创建store对象
const  store = new Vuex.Store({
    state:{
        cartNum: 0,
        carts: [],
        phone: '',
    },
    mutations:{
        incrementCartNum(state){
            state.cartNum ++;
        },
        addCart(state,payload){
            //先判断cart中是否已经存在该件商品
            state.carts = JSON.parse(localStorage.getItem("carts"));
            let flag = false;
            if(state.carts){
                state.carts.forEach(cart=>{
                    if(payload.id === cart.id){
                        flag = true;
                        cart.saveNum ++;
                    }
                })
                if(!flag){
                    payload.saveNum = 1;
                    payload.check=true;
                    state.carts.push(payload);
                    state.cartNum ++;
                }
            }else {
                state.carts = [];
                if(!flag){
                    payload.saveNum = 1;
                    payload.check=true;
                    state.carts.push(payload);
                    state.cartNum ++;
                }
            }



            state.cartNum = state.carts.length;
            localStorage.setItem("carts",JSON.stringify(state.carts));

        },
        deleteCart(state,id){
            //根据id删除指定cart
            let carts = JSON.parse(localStorage.getItem("carts"));
            console.log(id);
            state.carts = carts.filter(cart=>{
                return cart.id != id;
            })
            state.cartNum = state.carts.length;
            localStorage.setItem("carts",JSON.stringify(state.carts));

        },
        updateCart(state,id){
            let carts = JSON.parse(localStorage.getItem("carts"));
            console.log(id);
            carts.forEach(cart =>{
                if(cart.id === id){
                    cart.check = !cart.check;
                }
            })
            state.cartNum = carts.length;
            state.carts = carts;
            localStorage.setItem("carts",JSON.stringify(carts));
        },
        updateCartNum(state,item){
            let carts = JSON.parse(localStorage.getItem("carts"));
            console.log(carts);
            carts.forEach(cart =>{
                if(cart.id == item.id){
                    cart.saveNum = item.saveNum;
                }
            })
            state.cartNum = carts.length;
            state.carts = carts;
            localStorage.setItem("carts",JSON.stringify(carts));
        },
        addUserInfo(state,phone){
            state.phone = phone;
        }
    },

})

export default store
