import {
  SAVE_ADDRESS,
  SAVE_CATEGORYS,
  SAVE_SHOPS,
  SAVE_USER,
  SAVE_TOKEN
} from './mutation-type'



export default {
  [SAVE_ADDRESS](state, {address}){
    state.address = address
  },
  [SAVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
  },
  [SAVE_SHOPS](state, {shops}){
    state.shops = shops
  },
  [SAVE_USER](state, {user}){
    state.user = user
  },
  [SAVE_TOKEN](state, {token}){
    // 存储到本地localStorage || sessionStorage
    localStorage.setItem('token_key', token)
    state.token = token
  },
}
