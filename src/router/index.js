/**
 * Created by yn137 on 2019/5/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
Vue.use(VueRouter)

export default new VueRouter({
  routes,
  mode:'history'
})
