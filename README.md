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

























