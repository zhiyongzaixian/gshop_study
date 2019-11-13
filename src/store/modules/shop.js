import {
  getShopDatas
} from '../../api'

import {SAVE_SHOPDATAS} from '../mutation-type'

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
