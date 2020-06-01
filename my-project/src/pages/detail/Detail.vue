<template>
  <div>
    <Banner></Banner>
    <Header></Header>
    <div class="content"></div>
  </div>
</template>

<script>
  import Banner from "./components/Banner";
  import Header from "./components/Header";

  export default {
    name:'Detail',
    components:{
      Banner:Banner,
      Header:Header
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem

</style>
