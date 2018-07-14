<template>
  <div>
    <div class="search">
      <input v-model="keyWord" type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="Search" v-show="keyWord">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData: function () {
      return !this.list.length
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const searchResult = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              searchResult.push(value)
            }
          })
        }
        this.list = searchResult
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.Search)
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .search
    height .72rem
    background $bgColor
    padding: 0 .1rem
    .search-input
      box-sizing border-box
      padding 0 .1rem
      width 100%
      height .62rem
      border-radius .06rem
      text-align center
      color #666
  .search-content
    overflow hidden
    z-index 1
    position absolute
    top 1.58rem
    left: 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
</style>
