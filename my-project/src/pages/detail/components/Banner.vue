<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe64a;</span>
        </div>
      </div>

    </div>
    <common-gallary
      @close="handleGallaryClose"
      :imgs="imgs"
      v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'

  export default {
    name:'Banner',
    data () {
      return {
        showGallary: false,
        imgs:['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
          'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
      }
    },
    components: {
      CommonGallary:CommonGallary
    },
    methods:{
      handleBannerClick(){
        this.showGallary = true
      },handleGallaryClose(){
        this.showGallary = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      bottom 0
      right 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        font-size .32rem
        flex 1
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        line-height .32rem
        height .32rem
        margin-top .16rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .32rem
      .banner-icon
        font-size .24rem
</style>
