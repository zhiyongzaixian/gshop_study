import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'


// 专门放置路由信息
export default [
  // {
  //     path: '路由路径',
  //     component: 路由组件
  // }
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  }
]