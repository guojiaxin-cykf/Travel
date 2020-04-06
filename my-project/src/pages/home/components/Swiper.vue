<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img
          class="swiper-image"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data: function () {
      return {
        swiperOption:{
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList:[{
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/c1e20d0a-a54c-4cf9-af70-d1e586912943.jpg_r_390x260x95_7b9af778.jpg'
        },{
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/0fff4bb4-075a-4cd4-a694-fad073df11e1.jpg_r_390x260x95_fd3b258b.jpg'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    width: 100%
    height: 100%
    .swiper-image
      width: 100%
</style>
