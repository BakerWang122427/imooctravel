<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <alphabet-list :cities="cities" @alphChange="handleLetterChange"></alphabet-list>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/Search.vue'
import CityList from './components/CityList.vue'
import AlphabetList from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CitySearch,
    CityHeader,
    CityList: CityList,
    AlphabetList
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('./api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const resultData = res.data
        this.cities = resultData.cities
        this.hotCities = resultData.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
      // console.log(letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
