<template>
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="(iconPage, index) of pages" :key="index">
      <div class="icons">
        <div class="icon" v-for="item of iconPage" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="icon-img-content">
          </div>
          <p class="icon-desc">{{item.iconDesc}}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>

export default{
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data: function () {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        spaceBetween: 1000,
        loop: true
      }
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper: function () {
      return this.iconList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .icons
    width 100%
    overflow hidden
    height 0
    padding-bottom 50%
    margin-top: .1rem
    .icon
      position relative
      float left
      width 25%
      overflow hidden
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        color $darkTextColor
        text-align center
        position absolute
        left:0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
</style>
