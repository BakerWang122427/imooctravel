<template>
  <div class="city-list" ref="wrapper">
    <div>
     <div class="area">
       <div class="city-title border-topbottom">当前城市</div>
       <div class="button-list">
         <div class="button-wrapper">
           <div class="button">{{currentCity}}</div>
         </div>
       </div>
     </div>
     <div class="area">
       <div class="city-title border-topbottom">热门城市</div>
       <div class="button-list">
         <div class="button-wrapper"
              v-for="hotCity of hotCities"
              :key="hotCity.id"
              @click="choiceCity(hotCity.name)"
         >
           <div class="button">{{hotCity.name}}</div>
         </div>
       </div>
     </div>
     <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
       <div class="city-title border-topbottom">{{key}}</div>
       <div class="item-list">
         <div class="item border-bottom"
              v-for="innerItem of item"
              :key="innerItem.id"
              @click="choiceCity(innerItem.name)"
         >{{innerItem.name}}</div>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
// 使用vuex 的高级用法
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city' // 意思是奖 this.$store.state.city 映射给 currentCity；如果见面不要currentCity 那么就是映射给当前的city
    })
    /* currentCity () {
      return this.$store.state.city
    } */
  },
  methods: {
    choiceCity (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    // 将mutations中的 changeCity 映射到当前组件，这样当前组件就可以不使用commit，而是可以直接调用mutations中的方法
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .city-list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
    .city-title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          text-align center
          border .02rem solid #ccc
          padding .1rem 0
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left:.2rem
</style>
