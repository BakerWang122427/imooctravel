<template>
  <div class="homeBanner">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of indexBanners" :key="item.id">
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
  props: {
    indexBanners: Array
  },
  data () {
    return {
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
  },
  computed: {
    showSwiper: function () {
      return this.indexBanners.length
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
