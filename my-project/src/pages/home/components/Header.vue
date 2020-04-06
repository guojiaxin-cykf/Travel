<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe743;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe600;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe7b2;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      margin-top: .2rem
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      color: #ccc
      border-radius: .1rem
    .header-right
      margin-top: .2rem
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.06rem
        font-size: .42rem
</style>
