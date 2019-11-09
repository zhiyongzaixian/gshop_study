import {
  SAVE_ADDRESS
} from './mutation-type'



export default {
  [SAVE_ADDRESS](state, {address}){
    state.address = address
  }
}
