<template>
  <div class="layout">
    <Layout class="page-layout">
      <Header class="header">
        <div class="header-logo">
          <router-link to="/">
            <span>Widget</span>
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
      </Header>
      <Layout class="content-layout">
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu
            :active-name="activeName"
            theme="light"
            width="auto"
            class="content-menu"
            @on-select="selectMenuItem"
            :open-names="['components']">
            <Submenu
              v-for="(subMenu, index) of menu"
              :key="index"
              :name="subMenu.name">
              <template slot="title">
                <Icon type="ios-paperplane-outline"></Icon>
                {{ subMenu.label }}
              </template>
              <MenuItem
                v-for="(item, idx) of subMenu.menuItem"
                :key="idx"
                v-if="!item.hide"
                :name="item.name">
                {{ item.label }}
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Content>
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'tree',
      menu: [{
        name: 'components',
        label: '组件',
        menuItem: [{
          name: 'tree',
          label: '树形结构(Tree)',
          router: 'Tree'
        }]
      },
      {
        name: 'JS',
        label: 'JS效果',
        menuItem: [{
          name: 'JSDrag',
          label: '拖动',
          router: 'Drag'
        },
        {
          hide: true,
          name: 'JSAnimation',
          label: '动画(Animation)',
          router: 'Animation'
        }]
      }],
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
  },
  mounted () {
    this.selectMenuItem(this.activeName)
  },
  methods: {
    selectMenuItem (name) {
      for (let menuItems of this.menu) {
        for (let item of menuItems.menuItem) {
          if (item.name === name) {
            this.$router.push({ name: item.router })
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout
  border 1px solid #d7dde4
  background #8DABC4
  position relative
  overflow hidden
  border-radius 5px
  height 100%
  .page-layout
    height 100%
    .header
      background #3F536E
.header-logo
  user-select none
  width 100px
  background #4C5D73
  border-radius 3px
  float left
  left 20px
  color #8DABC4
  &:hover
    cursor pointer

.header-link
  float right
  right 20px
  color #F7F7F7
  font-size 2rem
  .link-item
    margin-left 1rem
    a:link, a:visited, a:hover, a:active
      color #F7F7F7

.layout-nav
    width 420px
    margin 0 auto
    margin-right 20px

.content-layout
  height 100%
  .content-menu
    user-select none
    height 100%
    overflow-y auto
    text-align left
</style>
