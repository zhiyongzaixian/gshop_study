import {
  SAVE_ADDRESS,
  SAVE_CATEGORYS
} from './mutation-type'



export default {
  [SAVE_ADDRESS](state, {address}){
    state.address = address
  },
  [SAVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
  }
}
