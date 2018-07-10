<template>
  <div>
    <div class="rec-title">周末去哪儿玩</div>
    <ul>
      <li class="rec-item" v-for="item of recommendList" :key="item.id">
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
  data: function () {
    return {
      recommendList: [
        {id: 1001,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          itemtittle: '漂流勇进，烧烤露营',
          itemdesc: '揽天下奇花异草，聚世界经典园林揽天下奇花异草，聚世界经典园林'},
        {id: 1002,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          itemtittle: '北京清凉避暑胜地',
          itemdesc: '到大自然中享受“天然空调”的清凉'},
        {id: 1003,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          itemtittle: '寻找北京的皇城范儿',
          itemdesc: '数百年的宫廷庙宇，至今依旧威严霸气'}
      ]
    }
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
