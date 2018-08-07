<template>
  <div class="container">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content">
      <div class="menu-list">
        <div
          :class="['menu-item', currentComponent === key ? 'current-menu' : '']"
          v-for="(value, key) of components"
          v-if="!value.lock"
          @click.stop="currentComponent=key"
          :key="key">{{ value.showName || key }}
        </div>
      </div>
      <div class="menu-content">
        <component
          v-if="currentComponent"
          :is="components[currentComponent]">
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import componentList from '@/pages'
import Header from './Header'

export default {
  data () {
    return {
      components: { ...componentList },
      currentComponent: ''
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100%
  display flex
  flex-direction column
  .header
    min-height 3rem
    border-radius 2px
    background #2C405A
    border-bottom 1px solid #FFF8E6
  .content
    color #3F536E
    display flex
    flex auto
    background #F7F7F7
    .menu-list
      overflow-y auto
      overflow-x hidden
      min-width 10rem
      box-shadow 0 2px 2px 1px #4F7DE2
      background white
      .menu-item
        height 2.5rem
        box-shadow 2px 0 2px 0 #79A1EB
        display flex
        align-items center
        justify-content center
        cursor pointer
        user-select none
        -webkit-user-select none
        &:hover
          background #ECF2FC
        &:active
          position relative
          left 1px
          top 1px
        &.current-menu
          background #BCD2FD
    .menu-content
      flex auto
      overflow auto
</style>
