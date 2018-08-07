<template>
  <div class="header">
    <div class="header-logo">
      <Button type="info" class="logo-button">Widget</Button>
    </div>
    <div class="header-link">
      <span
        v-for="(item, idx) of linkItems"
        :key="idx"
        class="link-item">
        <a :href="item.link" target="_blank">
          <Tooltip :transfer="true" :content="item.tip">
            <Icon :type="item.icon"></Icon>
          </Tooltip>
        </a>
      </span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.header
  height 100%
  display flex
  justify-content space-between
  align-items center
  padding 0 1rem
  .header-logo
    user-select none
    border-radius 3px
  .header-link
    right 20px
    color #F7F7F7
    font-size 2rem
    .link-item
      margin-left 1rem
      a:link, a:visited, a:hover, a:active
        color #F7F7F7
</style>

<script>
export default {
  data () {
    return {
      linkItems: [
        {
          icon: 'android-compass',
          link: 'https://blog.csdn.net/u010419337',
          tip: '博客'
        },
        {
          icon: 'social-github',
          link: 'https://github.com/Lushenggang/vue-widget',
          tip: 'github'
        }
      ]
    }
  }
}
</script>
