<template>
  <div class="header">
    <div class="header-logo">
      <router-link :to="{path:'/'}">
        <Button type="info" class="logo-button">Widget</Button>
      </router-link>
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
  min-height 3rem
  border-radius 2px
  background #2C405A
  border-bottom 1px solid #FFF8E6
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
          icon: 'logo-wordpress',
          link: 'https://blog.csdn.net/u010419337',
          tip: '博客'
        },
        {
          icon: 'logo-github',
          link: 'https://github.com/Lushenggang/vue-widget',
          tip: 'github'
        }
      ]
    }
  }
}
</script>
