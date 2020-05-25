<template>
  <div class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </div>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props:{
      cities:Object
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 2.2rem
    right .16rem
    bottom 0
    width .4rem
    .item
      line-height .4rem
      list-style none
      text-align center
      color $bgColor
</style>
