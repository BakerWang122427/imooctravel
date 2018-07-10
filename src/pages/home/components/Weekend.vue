<template>
  <div>
    <div class="rec-title">周末去哪儿玩</div>
    <ul>
      <li class="rec-item" v-for="item of weekendList" :key="item.id">
        <div class="rec-item-div">
          <img class="rec-item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="rec-item-info">
          <p class="rec-item-tittle">{{item.itemtittle}}</p>
          <p class="rec-item-desc">{{item.itemdesc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .rec-title
    line-height .8rem
    background #eee
    text-indent .2rem
  .rec-item-div
    overflow hidden
    height 0
    padding-bottom 32.9%
    .rec-item-img
      width 100%
  .rec-item-info
    padding .1
    min-width 0
    .rec-item-tittle
      line-height .54rem
      font-size: .3rem
      ellipse()
    .rec-item-desc
      line-height .6rem
      color #ccc
      ellipse()
</style>
