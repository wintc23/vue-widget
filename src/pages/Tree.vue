<template>
  <div class="tree">
    <div class="tree-title">
      树结构
    </div>
    <my-tree>
    </my-tree>
  </div>
</template>

<script>
import MyTree from '@/components/MyTree'

export default {
  name: 'tree',
  components: {
    'my-tree': MyTree
  }
}
</script>

<style lang="stylus" scoped>
.tree
  padding 3rem 2rem
  text-align left
  .tree-title
    border-bottom 1px solid gray
    padding-bottom 0.5rem
    margin-bottom 1rem
</style>
