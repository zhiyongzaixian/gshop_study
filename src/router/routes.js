import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'


// 专门放置路由信息
export default [
  // {
  //     path: '路由路径',
  //     component: 路由组件
  // }
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
      isShowFooterGuide: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
