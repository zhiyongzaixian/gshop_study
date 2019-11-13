import Vue from 'vue'
import {
  getShopDatas
} from '../../api'

import {SAVE_SHOPDATAS, ADD_FOOD_COUNT, DEL_FOOD_COUNT} from '../mutation-type'

const state = {
  shopDatas: {}, // 初始化商家信息数据
}


const actions = {
  async getShopDatasAction({commit}){
    let result = await getShopDatas()
    if(result.code === 0){
      commit(SAVE_SHOPDATAS, {shopDatas: result.data})
    }
  }
}

const mutations = {
  [SAVE_SHOPDATAS](state, {shopDatas}){
    state.shopDatas = shopDatas
  },
  [ADD_FOOD_COUNT](state, {food}){
    if(food.count){ // count > 0
      food.count++
    }else { // count： 1. undefined 2. 0
      // 非响应式属性，数据发生变化，页面不会更新
      // food.count = 1
      Vue.set(food, 'count', 1)
    }
  },
  [DEL_FOOD_COUNT](state, {food}){
    if(food.count){
      food.count--
    }
  }
}


const getters = {

}



export default {
  state,
  actions,
  mutations,
  getters
}
