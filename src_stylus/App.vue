<template>
  <div>
    <h1>App组件</h1>
    <div id="box">
      <p>我是p标签</p>
      <button class="btn1">btn1</button>
      <button class="btn2">btn2</button>
    </div>


    <div class="box1 active">1111</div>
    <div class="box1 ">2222</div>
  </div>
</template>
<script>
  import Hello from './components/Hello'
  export default {
    name:'App',
    components: {Hello}

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  // 定义变量
  $color = red
  // 定义混合(mixins)
  btnStyle(w, h, bgColor)
    width w
    height h
    background bgColor
    border none
  // 函数
  add(a, b)
    a + b
  h1
    color red
  #box
    p
      font-size 40px
      color $color
    .btn1
      btnStyle(100px, 100px, $color)
      padding add(20, 30px)
      box-sizing content-box

    .btn2
      btnStyle(200px, 200px, green)

  .box1
    font-size 40px
    // 父级引用
    &.active
      color $color
</style>
