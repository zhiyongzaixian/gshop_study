
import ajax from './ajax'

// 定义发送请求的方法

// const baseUrl= '/api'

/*  根据经纬度获取位置详情 */
export const getAddress = (latitude, longitude) => ajax({
  url: `/position/${latitude},${longitude}`
})


/*  获取食品分类列表 */

export const getCategorys = () => ajax({
  url: '/index_category'
})


/*  根据经纬度获取商铺列表 */
export const getShops = (latitude, longitude) => ajax({
  url: '/shops',
  params: {
    latitude,
    longitude
  }
})


/* 用户名密码登陆 */
export const loginWithPassword = (name, pwd, captcha) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    name,
    pwd,
    captcha
  }
})


/* 手机号验证码登陆 */
export const loginWithPhone = (phone, code) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    phone,
    code
  }
})


/* 发送短信验证码 */
export const sendCode = phone => ajax({
  url: '/sendcode',
  params: {
    phone
  }
})
