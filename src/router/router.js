import Login from '../page/login/login.vue'
import profile from '../page/profile/profile.vue'
import App from '../App.vue'
import search from '../page/search/search.vue'
import order from '../page/order/order.vue'
import detail from '../page/detail/detail.vue'
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
export default [
    {path:'/',component: Login},
    {path: '/shop', component: App},
    {path: '/profile',component:profile},
    {path:'/search',component:search},
     {path:'/order',component:order},
     {path:'/detail',component:detail}
]