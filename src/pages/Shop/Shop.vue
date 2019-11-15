<template>
  <div>
    <ShopHeader />
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods">订餐</router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/shop/rating">评价</router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/shop/info">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {SAVE_SHOPDATAS, SAVE_CARTSHOPS} from '../../store/mutation-type'
  import ShopHeader from '../../components/ShopHeader/ShopHeader'
  export default {
    components: {ShopHeader},
    computed: {
      ...mapState({
        shopDatas: state => state.shop.shopDatas,
        cartShops: state => state.shop.cartShops
      })
    },
    mounted(){
      // 读取sessionStorage中是否有之前存储的数据
      if(sessionStorage.getItem('shopDatas')){
        // 有值
        let shopDatas = JSON.parse(sessionStorage.getItem('shopDatas'))

        let cartShops = shopDatas.goods.reduce((pre, good) => {
          pre.push(...good.foods.filter(food => food.count))
          return pre
        }, [])
        // 将获取的值存入store对象中
        this.$store.commit(SAVE_SHOPDATAS, {shopDatas})
        this.$store.commit(SAVE_CARTSHOPS, {cartShops})
      }else {
        // 之前没有值
        this.$store.dispatch('getShopDatasAction')
      }
      // beforeunload 页面刷新之前调用
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('shopDatas', JSON.stringify(this.shopDatas))
        // 分别保存的话导致shopDatas和cartShops是两个独立的对象，互相没有引用关联，
        // sessionStorage.setItem('cartShops', JSON.stringify(this.cartShops))
      })
    },
    beforeDestroy(){
      // z组件销毁之前将数据保存至sessionStorage，好处：只保存一次， 缺点： 二级路由组件切换的时候原本的数据没有丢失，但是也保存了

      // sessionStorage.setItem('shopDatas', JSON.stringify(shopDatas))
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774

</style>
