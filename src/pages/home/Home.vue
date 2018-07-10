<template>
  <div>
    <home-header :city="city"></home-header>
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
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      indexBanners: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      // console.log(res)
      const result = res.data
      if (result.ret && result.data) {
        const resultData = result.data
        this.city = resultData.city
        this.indexBanners = resultData.indexBanners
        this.iconList = resultData.iconList
        this.recommendList = resultData.recommendList
        this.weekendList = resultData.weekendList
      }
    }
  },
  mounted: function () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
