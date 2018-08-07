<template>
  <div class="tree">
    <div class="tree-title">
      树结构
    </div>
    <my-tree
      @addBrother="addBrother"
      @addChild="addChild"
      @deleteNode="deleteNode">
    </my-tree>
  </div>
</template>

<script>
import MyTree from '@/components/MyTree'

export default {
  name: 'tree',
  showName: '树形结构(Tree)',
  components: {
    'my-tree': MyTree
  },
  data () {
    return {
      id: 100
    }
  },
  methods: {
    addBrother (event, data) {
      let parentData = this.getParentData(event.target)
      console.log(parentData)
      if (parentData) {
        let index = parentData.indexOf(data)
        if (index !== -1) {
          parentData.splice(index + 1, 0, this.newNode())
        }
      }
    },
    addChild (event, data) {
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(this.newNode())
    },
    deleteNode (event, data) {
      let parentData = this.getParentData(event.target)
      if (parentData) {
        let index = parentData.indexOf(data)
        if (index !== -1) {
          parentData.splice(index, 1)
        }
      }
    },
    newNode () {
      let id = this.id++
      return {
        id,
        name: '新节点' + id,
        expand: true,
        children: []
      }
    },
    getParentData (node) {
      while (node && node.tagName !== 'BODY') {
        if (node.__vue__ && node.__vue__.$options.name === 'my-tree') {
          return node.__vue__.treeData
        }
        node = node.parentNode
      }
      return null
    }
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
