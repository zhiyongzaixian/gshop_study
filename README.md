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
