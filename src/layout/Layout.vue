<template>
  <div class="layout">
    <Header></Header>
    <router-view class="layout-content"></router-view>
  </div>
</template>

<script>
import Header from './Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
.layout
  display flex
  flex-direction column
  height 100%
  .layout-content
    height 100%
    overflow auto
</style>
