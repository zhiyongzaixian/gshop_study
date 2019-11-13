import Mock from 'mockjs'
import datas from './data'
const baseUrl = '/api'


Mock.mock(`${baseUrl}/test1`, 123)


Mock.mock(`${baseUrl}/shopDatas`, {code: 0, data: datas})
