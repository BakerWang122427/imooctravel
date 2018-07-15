<template>
  <div>
    <home-header></home-header>
    <home-swiper :indexBanners="indexBanners"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      indexBanners: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      // console.log(res)
      const result = res.data
      if (result.ret && result.data) {
        const resultData = result.data
        this.indexBanners = resultData.indexBanners
        this.iconList = resultData.iconList
        this.recommendList = resultData.recommendList
        this.weekendList = resultData.weekendList
      }
    }
  },
  mounted: function () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated: function () { // 页面重新显示的时候会被执行
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
