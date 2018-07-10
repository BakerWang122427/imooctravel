<template>
  <div class="homeBanner">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of banners" :key="item.id">
        <img class="homeBannerImg" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      banners: [{id: 10001, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'},
        {id: 1002, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/a1/e645466a5a1c9a02.jpg_750x200_9c489fbd.jpg'},
        {id: 1003, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/f5/ea83238744f31102.jpg_750x200_73b8477c.jpg'}],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000
        },
        spaceBetween: 1000,
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .homeBanner >>> .swiper-pagination-bullet-active
    background : #ffffff !important
  .homeBanner
    overflow :hidden
    width :100%
    height :0
    background :#ccc
    padding-bottom :26.66%
    .homeBannerImg
      width :100%
</style>
