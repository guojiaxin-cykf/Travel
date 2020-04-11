<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of RecommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl'/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data:function () {
      return{
        RecommendList:[{
          id:'0001',
          imgUrl:'https://imgs.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title:'希望田野 ',
          desc:'书、花与自然，播散春天的希望'
        },{
          id:'0002',
          imgUrl:'https://imgs.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
          title:'树上花火',
          desc:'爱情从这里开始 幸福从这里出发'
        },{
          id:'0003',
          imgUrl:'https://imgs.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
          title:'青城圣地',
          desc:'道教祖庭-青城山 欢迎您的到来'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>

