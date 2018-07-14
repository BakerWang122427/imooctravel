<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/City">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      city: String
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式区域引入样式 使用@import
  // @import "../../../assets/styles/varibles.styl"
  // 也可以使用一些引入方式  @ = src 这部分是在webpack.base.conf.js 中配置的 style中使用前面必须加~
  @import "~@/assets/styles/varibles.styl"
  .header
    display :flex
    height : $headerHeight
    background :$bgColor
    color :#ffffff
    line-height :$headerHeight
    .header-left
      width :.64rem
      float :left
      .back-icon
        text-align :center
        font-size :.4rem
    .header-input
      flex :1
      height :.64rem
      margin-left :.2rem
      margin-top :.12rem
      padding-left :.2rem
      background :#ffffff
      border-radius :.1rem
      color :#ccc
      line-height :.64rem
    .header-right
      width :1.24rem
      float :right
      text-align :center
      .arrow-icon
        margin-left :-.04rem
        font-size :.24rem
</style>
