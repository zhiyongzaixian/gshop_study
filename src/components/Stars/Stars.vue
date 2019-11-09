<template>
  <div class="star star-24">
    <span class="star-item" :class="starClass" v-for="(starClass, index) in starClassArr" :key="index"></span>
  </div>

</template>

<script>
  export default {
    props: {
      rating: {
        type: Number,
        required: true
      }
    },
    computed: {
      starClassArr(){
        let {rating} = this
        rating = 2.7
        let classesArr = []
        // 思考： 3.4 on on on half off
        // 思考： 4.7 on on on on half
        // 思考： on: 0-5, half: 0 || 1 , off: 0-5
        // 计算on的代码段
        let onCount = Math.floor(rating)
        for (var i = 0; i < onCount; i++) {
          classesArr.push('on')
        }
        // 计算half
        rating - onCount !== 0 && classesArr.push('half')
        // 计算灰星星
        while (classesArr.length < 5) {
          classesArr.push('off')
        }

        return classesArr
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../common/images/stars/star48_on')
        &.half
          bg-image('../../common/images/stars/star48_half')
        &.off
          bg-image('../../common/images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../common/images/stars/star36_on')
        &.half
          bg-image('../../common/images/stars/star36_half')
        &.off
          bg-image('../../common/images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('../../common/images/stars/star24_on')
        &.half
          bg-image('../../common/images/stars/star24_half')
        &.off
          bg-image('../../common/images/stars/star24_off')
</style>
