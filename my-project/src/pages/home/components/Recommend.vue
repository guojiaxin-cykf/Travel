<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of RecommendList" :key="item.id">
        <img class="item-img" :src='item.imgUrl'/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data:function () {
      return{
        RecommendList:[{
          id:'0001',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1809/1f/1f39774291457a42a3.img.jpg_200x200_e2d8001d.jpg',
          title:'希望田野 ',
          desc:'书、花与自然，播散春天的希望'
        },{
          id:'0002',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1706/6f/6f9d1b1581a31a80a3.img.jpg_200x200_a5d97f2e.jpg',
          title:'树上花火',
          desc:'爱情从这里开始 幸福从这里出发'
        },{
          id:'0003',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg',
          title:'青城圣地',
          desc:'道教祖庭-青城山 欢迎您的到来'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>

