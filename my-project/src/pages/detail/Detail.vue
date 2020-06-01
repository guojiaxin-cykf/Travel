<template>
  <div>
    <Banner></Banner>
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

  export default {
    name:'Detail',
    components:{
      Banner:Banner,
      Header:Header,
      List:List
    },
    data(){
      return{
        list:[{
          title:'成人票',
          children:[{
            title:'成人三馆联票',
            children:[{
              title:'成人三馆联票-某一连锁店销售'
            }]
          },{
            title:'成人四馆联票'
          }]
        },{
          title:'学生票',
        },{
          title:'儿童票'
        },{
          title: '特惠票'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem

</style>
