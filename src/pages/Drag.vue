<template>
  <div
    class="drag"
    v-drag>
    可拖动窗口
  </div>
</template>

<script>
export default {
  name: 'Drag',
  showName: '元素拖动(Drag)'
}
</script>

<style lang="stylus" scoped>
.drag
  min-width 240px
  min-height 400px
  background #D0DEF8
  display flex
  align-items center
  justify-content center
</style>
