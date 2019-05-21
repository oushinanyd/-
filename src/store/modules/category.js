/**
 * Created by yn137 on 2019/5/21.
 */

import {REC_CATEGORIES_LIST} from '../mutationType'
import {reqCategoryData} from '../../api'
const state={
  categoryList:[]
}
const mutations={
  [REC_CATEGORIES_LIST](state,data){
    state.categoryList=data
  }
}
const actions={
  async getCategoryData({commit}){
    let response=await reqCategoryData()
    if(response.code===0){
      let data=response.data.categoryL1List
      commit(REC_CATEGORIES_LIST,data)
    }
  }
}
export default {
  state,
  mutations,
  actions
}

