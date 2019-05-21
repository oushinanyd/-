/**
 * Created by yn137 on 2019/5/18.
 */
import {
  REC_POLICE_LIST,
  REC_GOODS_NAV,
  REC_SHOPPING_GUIDE,
  REC_BRAND_SUPPLY,
  REC_HOT_CATEGORY,
  REC_POPULAR_LIST,
  REC_FAST_SHOP_LIST,
  REC_PERSONAL_SHOP,
  REC_TOPIC_SELECT_LIST,
  REC_FUNDING_LIST,
  REC_CATEGORY_LIST
} from '../mutationType'
import {reqHomeData} from '../../api'

const state= {
  policyDescList: [],//保障策略
  goodsNav: [],//商品导航
  shoppingGuide: [],//购物榜单
  brandSupply:[],//品牌制造商直供
  hotCategoryList:[],//类目热销榜
  popularList: [],//人气推荐
  fastShopList: [],//限时购
  personalShop: [],//私人定制
  topicSelectList: [],//专题精选
  fundingList: [],//众筹
  categoryList: [],//主题展示
}
const mutations={
  [REC_POLICE_LIST](state,data){
    state.policyDescList=data
  },
  [REC_GOODS_NAV](state,data){
    state.goodsNav=data
  },
  [REC_SHOPPING_GUIDE](state,data){
    state.shoppingGuide=data
  },
  [REC_BRAND_SUPPLY](state,data){
    state.brandSupply=data
  },
  [REC_HOT_CATEGORY](state,data){
    state.hotCategoryList=data
  },
  [REC_POPULAR_LIST](state,data){
    state.popularList=data
  },
  [REC_FAST_SHOP_LIST](state,data){
    state.fastShopList=data
  },
  [REC_PERSONAL_SHOP](state,data){
    state.personalShop=data
  },
  [REC_TOPIC_SELECT_LIST](state,data){
    state.topicSelectList=data
  },
  [REC_FUNDING_LIST](state,data){
    state.fundingList=data
  },
  [REC_CATEGORY_LIST](state,data){
    state.categoryList=data
  },
}
const actions={
  async getPolicyDescList({commit}){//保障策略
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.policyDescList
      commit(REC_POLICE_LIST,data)
    }
  },
  async getGoodsNav({commit}){//商品导航
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.goodsNav
      commit(REC_GOODS_NAV,data)
    }
  },
  async getShoppingGuide({commit}){//购物榜单，品牌制造商直供
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.shoppingGuide
      commit(REC_SHOPPING_GUIDE,data)
    }
  },
  async getBrandSupply({commit}){//品牌制造商直供
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.tagList
      commit(REC_BRAND_SUPPLY,data)
    }
  },
  async getHotCategoryList({commit}){//类目热销榜
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.categoryHotSellModule
      commit(REC_HOT_CATEGORY,data)
    }
  },
  async getPopularList({commit}){//人气推荐
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.popularItemList
      commit(REC_POPULAR_LIST,data)
    }
  },
  async getFastShopList({commit}){//限时购
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.flashSaleModule.itemList
      commit(REC_FAST_SHOP_LIST,data)
    }
  },
  async getPersonalShop({commit}){//私人定制
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.personalShop
      commit(REC_PERSONAL_SHOP,data)
    }
  },
  async getTopicSelectList({commit}){//专题精选
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.topicList
      commit(REC_TOPIC_SELECT_LIST,data)
    }
  },
  async getFundingList({commit}){//众筹
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.zhongChouList
      commit(REC_FUNDING_LIST,data)
    }
  },
  // async getCategoryList({commit}){//主题展示
  //   let response=await reqHomeData()
  //   if(response.code===0){
  //     const data=response.data.categoryHotSellModule.categoryList
  //     commit(REC_CATEGORY_LIST,data)
  //   }
  // },
  async getCategoryModule({commit}){//箱包鞋服
    let response=await reqHomeData()
    if(response.code===0){
      const data=response.data.categoryModule
      commit(REC_CATEGORY_LIST,data)
    }
  },
}

export default {
  state,
  mutations,
  actions
}
