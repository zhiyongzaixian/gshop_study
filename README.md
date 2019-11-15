# Vue3脚手架创建项目

## 1. vue.config.js

```
const path = require('path')
const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 64   // 设计稿等分后的rem值   750/10 = 75
})

function resolve (dir) {
  return path.join(__dirname,  dir)
}

module.exports = {
  runtimeCompiler: true, // 运行时包含编译器的版本
  lintOnSave: false, // 关闭ESLint编译
  configureWebpack : {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
      }
    },
  },
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
 
}

```



## 2. 适配

 1. 为什么要做适配

     	1. 机型太多，屏幕大小不一样

 2. 适配的终极目标

     	1. 让一套设计稿的内容在不同的机型上呈现的效果一致
          	2. 让页面的内容在不同的机型上 ‘等比’

 3. 适配方案： 

     	1. viewport
          	2. rem

 4. viewport: 视口

     	1. 布局视口: 手机厂商在生产手机的时候设置的默认的页面宽度： 980px
          	2. 视觉视口: 所见即所得，屏幕宽度

 5. viewport适配

    ```
    <meta name='viewport' content='width=device-width,initial-scale=1.0,user-scaleable=no'/>
    ```

6. rem适配

  1. 概念区分：
      	1. rem: 根节点字体的大小
         	2. em: 相对于父节点字体的大小
                 	3. px: css像素单位
  2. 核心思想:
      	1. 根据不同的屏幕大小动态的设置rem的字体大小
         	2. 页面需要适配的内容大小根据rem来设置

  7. postcss-px2rem

         1. 将设置的px单位转换为rem
         2. 基数： 设计稿的宽度/页面等分的份数

## 3. 路由

### 3.1 路由分类

 	1.  前端路由
       	1.  不需要走网络层
       	2.  通常用来实现SPA应用
 	2.  后端路由
       	1.  需要走网络传输层
       	2.  通常为前端提供接口数据

### 3.2 vue-router

	1. 买路由器: npm install vue-router
 	2. 装路由器: new VueRouter()
 	3. 配置路由器: 
      	1. 路由路径: routes
      	2. 路由的管理模式: mode
 	4. 使用路由:
      	1. 路由链接
           	1. router-link	
      	2. 编程式导航
           	1. $router: 包含了所有路由跳转的方法
           	2. $route: 包含了当前路由的所有路由信息
      	3. 路由容器
           	1. router-view

## 4 封装组件

1. 目的

   1. 保证组件的高可复用性，灵活度

2. 核心思想

   1. 将相同的代码段，固定不变的代码段放置在组件的内部

   2. 不同的数据

      1. 通过标签属性的形式将数据传入组件内部，在组件内部通过props接收

      2. 良好的组件可以规定props属性的必要性以及传入的数据类型

         ```
         props: {
               title: {
                 required:true,
                 type: String
               }
             }
         ```

         

   3. 不同的标签数据： slot 插槽

## 5. 插槽

1. 分类

   1. 普通的插槽

      1. 多用在只有一个插槽

   2. 具名插槽

      1. 一般有多个插槽的时候需要使用具名插槽

      2. 用来区分使用哪个插槽

         ```
          **************** 定义插槽 ******************
          <slot name="left"></slot>
           **************** 使用插槽 ******************
           <template v-slot:right>
               <span class="header_login">
               	<span class="header_login_text">登录|注册</span>
               </span>
           </template>
           <span slot="left" class="header_search">
           	<i class="iconfont icon-sousuo"></i>
           </span>
         ```


## 6. Vuex

1. 作用
   1. 集中管理状态数据
   2. 用于给多个组件进行数据共享
2. 核心概念
   1. store对象: 管理state及参与修改state的多个方法
   2. state: 保存状态数据
   3. mutation: 
      1. 本质是函数
      2. 用于直接修改state的数据
      3. 只能处理同步类型的数据
      4. 要修改异步数据需要action
   4. action
      1. 修改异步数据
      2. 获取异步数据之后调用mutation(commit)并且将数据交给mutation
   5. getters
      1. store对象的计算属性
   6. dispatch
      1. 用于分发action



## 7. swiper

 1. 基本语法

    ```
    1. npm install swiper
    2. 使用:
    	new Swiper('.swiper-container')
    ```

	2. 注意点

    	1. new Swiper的时机
    	2. 如果new Swiper的动作发生在列表数据请求回来之前出现滑块无法滑动，导航没有

	3. 解决方案

    	1. 核心思想： 保证new Swiper的时机在数据达到并且渲染之后

    	2. 解决方案一： watch ---> 目标数据

        ```
        this.$nextTick(() => { //$nextTick代表下次页面全部渲染完毕
            new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                el: '.swiper-pagination',
                },
            })
        })
        ```

    	3. 解决方案二: 使用dispatch传递callback就---> commit之后调用

    

## 8. token

1. npm install jsonwebtoken
2. 加密(sign): 加密的内容 + 密钥(字符串) + 有效时间
3. 解密(decode): token + 密钥(字符串)

## 9. 登录流程

1. 注册
   1. 前端验证： 验证用户名及密码等的格式
   2. 后端验证:    验证用户名是否合法或者已有， ajax请求
2. 登录
   1. 前端验证:  验证用户名及密码等的格式
   2. 后端验证
      1. 后端返回用户信息： 用户名，token(cookie, session)
      2. 将token存储到本地，内存(vuex)
      3. 下一次再请求的时候携带token作为身份标识

## 10. Vuex问题

1. 刷新页面数据丢失
   1. 原因： 
      1. Vuex的数据保存运行的内存中
      2. 刷新页面重新初始化整个应用，重新分配内存空间，重新初始化store对象
   2. 解决方案一： 
      1. 重新发送ajax请求获取之前丢失的数据
      2. 缺点： 每次刷新都得发送请求，浪费带宽
   3. 解决方案二：
      1. 在Vuex中更新state数据的同时同步更新sessionStorage中的数据
      2. 缺点: 每次数据变化都会更新sessionStorage，性能较差
   4. 解决方案三: 
      1. 利用页面的beforeunload(页面即将刷新之前)事件将数据存储到sessionStorage中
      2. 组件再次加载的时候从sessionStorage中读取并更新Vuex中的数据
      3. 缺点： 搞不定路由跳转的情况
   5. 解决方案四： 
      1. 利用组件的生命周期函数beforeDestory()将数据存储到sessionStorage中
      2. 刷新页面 || 或者切换路由组件的时候，当前的路由组件会销毁，就会beforeDestory
      3. 组件再次加载的时候从sessionStorage中读取并更新Vuex中的数据

## 11. localStorage & sessionStorage&cookie& session

### 11.1 cookie

	1. 服务器端生成
 	2. 保存在浏览器端
 	3. cookie优点: 体积小，可以用于前端后数据交互进行身份验证
 	4. cookie缺点: 
      	1. 不安全
      	2. 体积小，4kb左右
      	3. 浏览器有了cookie以后每次发请求携带cookie，占用带框
      	4. 用户可以通过浏览器设置禁用cookie
 	5. cookie分类
      	1. 持久cookie，等同于localStorage的生命周期
      	2. 会话cookie，等同于sessionStorage的生命周期

### 11. 2 session

	1. 服务器端生成
 	2. 保存在服务端
 	3. 可以cookie作为载体达到浏览器端

### 11.3 localStorage

1. H5的新特新，用于本地存储
2. 存储量： 5M
3. 生命周期: 永久存储，保存在硬盘

### 11.4 sessionStorage

	1. H5的新特新，用于本地存储
 	2. 存储量: 5M
 	3. 生命周期: 会话存储，保存在运行的内存中，浏览器关闭，内存释放





















