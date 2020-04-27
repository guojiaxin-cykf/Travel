<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
  import CityHeader from './componentss/Header'
  import CitySearch from './componentss/Search'
  export default {
    name:'City',
    components:{
      CityHeader:CityHeader,
      CitySearch:CitySearch
    }
  }
</script>

<style lang="stylus" scoped>

</style>
