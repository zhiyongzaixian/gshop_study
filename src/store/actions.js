import {
  getAddress
} from '../api'
import {SAVE_ADDRESS} from "./mutation-type";



export default {
  async getAddressAction({commit}){
    //1. 发送请求获取数据
    let result = await getAddress(40.10038,116.36867)
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAVE_ADDRESS, {address: result.data})
    }
  }
}
