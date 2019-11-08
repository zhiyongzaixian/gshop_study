<template>
  <div id="footerGuideContainer">
    <div class="guideItem " :class="{active:$route.path === '/msite'}" @click="goPath('/msite')">
      <span>
        <i class="iconfont icon-shouye2"></i>
      </span>
      <span>
        首页
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/search'}" @click="goPath('/search')">
      <span>
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>
        搜索
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/order'}"  @click="goPath('/order')">
       <span>
        <i class="iconfont icon-nav-order"></i>
      </span>
      <span>
        订单
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/profile'}" @click="goPath('/profile')">
       <span>
        <i class="iconfont icon-wode"></i>
      </span>
      <span>
        我的
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPath(path){
        // $router(路由器对象，包含了路由跳转的方法) $route(路由信息对象， 包含当前路由的所有路由信息)
        this.$route.path !== path && this.$router.replace(path)
        // this.$router.push()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #footerGuideContainer
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    border-top 1px solid #eee
    box-sizing border-box
    display flex
    background #fff
    .guideItem
      width 25%
      height 100%
      text-align center
      display flex
      flex-direction column
      span
        i
          font-size 22px
        &:first-child
          margin 6px 0


      &.active
        color $green
</style>
