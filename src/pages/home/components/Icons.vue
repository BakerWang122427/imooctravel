<template>
  <swiper :options="swiperOption">
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
  data: function () {
    return {
      iconList: [{id: 1001, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', iconDesc: '景点门票'},
        {id: 1002, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', iconDesc: '必游榜单'},
        {id: 1003, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png', iconDesc: '夏日玩水'},
        {id: 1004, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png', iconDesc: '主题乐园'},
        {id: 1005, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', iconDesc: '动植物园'},
        {id: 1006, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png', iconDesc: '故宫'},
        {id: 1007, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', iconDesc: '一日游'},
        {id: 1008, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png', iconDesc: '公园'},
        {id: 1009, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', iconDesc: '游乐场'},
        {id: 1010, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png', iconDesc: '全部玩乐'}
      ],
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
