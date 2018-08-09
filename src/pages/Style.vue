<template>
  <div class="style-page">
    <div class="style-item">
      <div class="title">块级元素与内联元素</div>
      <div class="container">
        <!-- <span class="inline-1">内联元素1</span> -->
        <span class="inline-2">内联元素2</span>
      </div>
    </div>
    <div class="style-item">
      <div class="title">z-index</div>
      <div class="container">
        <div class="father1">
          <div class="child1"></div>
        </div>
        <div class="father2">
          <div class="child2"></div>
        </div>
      </div>
    </div>
    <div class="style-item">
      <div class="title">填满父元素剩余部分</div>
      <div class="container">
        <div class="father">
          <div class="child1">child1</div>
          <div class="child2">child2</div>
        </div>
      </div>
    </div>
    <div class="style-item">
      <div class="title">transform</div>
      <div class="container">
        <div class="div1">
          <div class="div2">
            测试文字
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  lock: true,
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.div1
  width 200px
  height 200px
  background green
  display flex
  align-items center
  justify-content center
.div2
  width 45px
  height 45px
  background yellow
.style-page
  display flex
  flex-direction column
  .style-item
    background #FFF
    text-align left
    margin 1rem
    border 1px dotted #90B1EF
    border-radius 5px
    padding 1rem
    .title
      margin-bottom 0.5rem
      border-bottom 1px solid #ECECEC
    .container
      border-radius 2px
      box-shadow 0 0 1px 0 #6190E8
      // display flex
      justify-content space-around
      align-items center
      text-align center
      padding 1rem
      min-height 200px
      &:hover
        box-shadow 0 0 1px 1px #3361D8
        position relative
        left 1px
        top 1px
      .inline-1
        border 1px solid #4C5D73
        border-radius 2px
        height 100px
        width 100px
        padding 1rem
        position absolute
      .inline-2
        display inline-block
        border 1px solid #4C5D73
        border-radius 2px
        height 100px
        width 100px

.father1
  width 100px
  height 100px
  background-color red
  position absolute
  z-index 10
  .child1
    width 50px
    height 50px
    position relative
    background-color white
    z-index 1
.father2
  width 100px
  height 100px
  background-color green
  position absolute
  .child2
    width 50px
    height 50px
    background-color black
    position relative
    z-index 100
.father
  display flex
  flex-direction column
  background yellow
  width 200px
  height 200px
  font-size 32px
  .child1
    width 100%
    height 50px
    background green
  .child2
    flex auto
    background gray
</style>
