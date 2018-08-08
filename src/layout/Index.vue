<template>
  <div class="layout-home">
    <div class="home-content">
      <span class="content">
        Hi,这里是我的个人网站。
      </span>
      <br>
      <span class="content">
        这里记录了一些个人的学习、生活以及对一些问题的思考和心得。
      </span>
      <br>
      <span class="content">
        您可以点击下面的导航链接访问您感兴趣的内容。
      </span>
    </div>
    <div class="nav-items">
      <router-link
        class="nav-item"
        v-for="(item, idx) of navItems"
        :key="idx"
        :to="{name: item.name}">
        <span class="circle"></span>
        {{item.title}}
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      navItems: [
        {
          title: '前端小实验',
          name: 'Widget'
        },
        {
          title: '博客',
          name: 'Widget'
        },
        {
          title: '教程',
          name: 'Widget'
        },
        {
          title: '开源项目',
          name: 'Widget'
        }
      ]
    }
  },
  created () {
    this.$router.push({ name: 'Widget' })
  }
}
</script>

<style lang="stylus" scoped>
.layout-home
  display flex
  align-items center
  justify-content center
  flex-direction column
  .home-content
    font-size 1rem
    box-shadow 0 0 0 1px #B0C8F4
    border 1px solid #3361D8
    border-radius 4px
    width 50%
    padding 1rem
    margin-bottom 2rem
    .content
      display inline-block
      text-align left
  .nav-items
    display flex
    flex-direction column
    align-items flex-start
    font-size 1.5rem
    .nav-item
      .circle
        display inline-block
        width 1rem
        height 1rem
        border 2px solid currentColor
        border-radius 0.5rem
        margin-right 0.5rem
      &:hover
        position relative
        top 1px
        color #FFC82C
      &:active
        left 1px
.hello
  border 1px solid red
  width 100px
  height 100px
</style>
