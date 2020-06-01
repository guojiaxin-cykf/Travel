<template>
  <div>
    <Banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    >
    </Banner>
    <Header></Header>
    <div class="content">
      <List :list="list"></List>
    </div>
  </div>
</template>

<script>
  import Banner from "./components/Banner";
  import Header from "./components/Header";
  import List from "./components/List"
  import axios from 'axios'
  export default {
    name:'Detail',
    components:{
      Banner:Banner,
      Header:Header,
      List:List
    },
    data () {
      return{
        sightName:'',
        bannerImg:'',
        gallaryImgs:[],
        list:[]
      }
    },
    mounted() {
      this.getDetailInfo()
    },
    methods:{
      getDetailInfo () {
        axios.get('/api/detail.json',{
          params:{
            id: this.$route.params.id
          }
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc(res){
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          console.log(data)
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem

</style>
