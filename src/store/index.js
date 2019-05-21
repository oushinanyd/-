/**
 * Created by yn137 on 2019/5/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import category from './modules/category'

import {GET_FOOT_HEIGHT} from './mutationType'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    footHeight:0
  },
  mutations:{
    [GET_FOOT_HEIGHT](state,footHeight){
      state.footHeight=footHeight
    }
  },
  modules:{
    home,
    category
  }
})

