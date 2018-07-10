<template>
  <div>
    <div class="rec-title">热销推荐</div>
    <ul>
      <li class="rec-item" v-for="item of recommendList" :key="item.id">
        <img class="rec-item-img" :src="item.imgUrl" alt="">
        <div class="rec-item-info">
          <p class="rec-item-tittle">{{item.itemtittle}}</p>
          <p class="rec-item-desc">{{item.itemdesc}}</p>
          <button class="rec-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .rec-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .rec-item
    overflow hidden
    display flex
    height 1.9rem
    .rec-item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .rec-item-info
      flex 1,
      padding .1
      min-width 0
      .rec-item-tittle
        line-height .54rem
        font-size: .32rem
        ellipse()
      .rec-item-desc
        line-height .6rem
        color #ccc
        ellipse()
      .rec-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color: #fff
</style>
