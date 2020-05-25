<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper" v>
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom" >热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
      >
        <div class="title border-topbottom" :key="key">
          {{key}}
        </div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'CityList',
    props:{
      hot:Array,
      cities:Object,
      city:String
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    top 1.59rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .28rem
    .button-list
      overflow hidden
      line-height .45rem
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.3%
        .button
          text-align center
          padding .1rem
          margin .1rem
          border .02rem solid #ccc
          border-radius .1rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
