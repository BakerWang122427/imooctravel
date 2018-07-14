<template>
  <div class="alph-list">
    <ul class="item-list">
      <li class="item"
          v-for="item of letterContents"
          :key="item"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick"
          :ref="item"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AlphabetList',
  props: {
    cities: Object
  },
  computed: {
    letterContents () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      // console.log(letters)
      // [A,B,C,D,E,F,G……,X,Y,Z]
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 获取A元素距离上面头部底部的高度 为 74px
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('alphChange', e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 获取手指接触屏幕处 距离上面头部底部的高度(79为头部部分高度)
          // console.log(touchY)
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index)
          if (index >= 0 && index < this.letterContents.length) {
            this.$emit('alphChange', this.letterContents[index])
          }
        }, 16)
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .alph-list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top: 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
