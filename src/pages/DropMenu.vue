<template>
  <div class="main" v-clickoutside="handleClose" v-cloak>
    <button @click="show=!show">点击显示下拉菜单</button>
    <div class="dropdown" v-show="show">
      <p>下拉框的内容，点击外面的区域可以关闭</p>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
[v=cloak]
  display none
.main
  margin auto
  width 125px
  button
    display block
    width 100%
    color #ffffff
    border 0
    background-color #39f
    padding 6px
    text-align center
    border-radius 4px
    cursor pointer
    outline none
    position relative
  button:active
    top 1px
    left 1px
  .dropdown
    width 100%
    height 150px
    margin 5px 0
    font-size 12px
    background-color #fff
    border-radius 4px
    box-shadow 0 1px 6px rgb(0, 0, 0, 0.2)
    p
      display inline-block
      padding 6px
</style>

<script>
export default {
  showName: '下拉菜单(DropMenu)',
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClose: function () {
      this.show = false
    }
  },
  directives: {
    'clickoutside': {
      bind: function (el, binding, vnode) {
        function documentHandler (e) {
          if (el.contains(e.target)) {
            return false
          }
          if (binding.expression) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = documentHandler
        document.addEventListener('click', documentHandler)
      },
      unbind: function (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__)
        delete el.__vueClickOutside__
      }
    }
  }
}
</script>
