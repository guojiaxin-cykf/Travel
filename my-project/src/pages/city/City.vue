<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities"
               :hot="hotCities"
               :city="city"
               :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
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
    },
    data(){
      return{
        cities: {},
        hotCities: [],
        city:'',
        letter:''
      }
    },
    methods:{
      getCityInfo(){
        axios.get('/api/city.json')
          .then(this.handleGetCityInfoSuc)
      },
      handleGetCityInfoSuc(res){
        res = res.data
        if(res.data && res.ret){
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
          this.city = data.city
        }
      },
      handleLetterChange(letter){
        this.letter = letter
      }
    },
    mounted() {
      this.getCityInfo()
    }
  }
</script>

<style lang="stylus" scoped>

</style>
