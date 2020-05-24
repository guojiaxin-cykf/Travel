<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './componentss/Header'
  import CitySearch from './componentss/Search'
  import CityList from './componentss/List'
  import CityAlphabet from './componentss/Alphabet'
  export default {
    name:'City',
    components:{
      CityHeader:CityHeader,
      CitySearch:CitySearch,
      CityList:CityList,
      CityAlphabet:CityAlphabet
    }
  }
</script>

<style lang="stylus" scoped>

</style>
