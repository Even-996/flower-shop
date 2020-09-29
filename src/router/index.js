import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)


const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Wode = () => import('../views/wode/Wode');
const Login = () => import('../views/wode/login/Login')
const Detail = () => import('../views/detail/Detail')
const Order = () => import('../views/order/Order')
const Pay = () => import('../views/pay/Pay')
const routes = [
    {
       path: '',
       redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/wode',
        component: Wode
    },
    {
        path:'/login',
        component: Login
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/pay',
        component: Pay
    }

]

const router = new vueRouter({
    routes,
    mode: 'history'
})

export default router