/**
 * Created by yn137 on 2019/5/17.
 */
import Home from '../pages/home/home.vue'
import Categories from '../pages/categories/categories.vue'
import Personal from '../pages/personal/personal.vue'
import Shop from '../pages/shop/shop.vue'
import Goods from '../pages/goods/goods.vue'
import Search from '../pages/search/search.vue'
export default [
  {path:"/home",component:Home,
    meta:{
    showFooter:true
  }},
  {path:"/categories",component:Categories,
    meta:{
     showFooter:true
    }},
  {path:"/personal",component:Personal,
    meta:{
    showFooter:true
    }},
  {path:"/shop",component:Shop,
    meta:{
    showFooter:true
  }},
  {path:"/goods",component:Goods,
    meta:{
      showFooter:true
    }},
  {path:"/search",component:Search,
    meta:{
      showFooter:false
    }},
  {path:'/',redirect:'/home'}
]
