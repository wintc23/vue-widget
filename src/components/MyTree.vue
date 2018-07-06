<template>
  <div class="my-tree">
    <div
      class="brother"
      v-for="(data, idx) of treeData"
      :key="idx">
      <div class="node">
        <span @click="data.expand=!data.expand">
          <Button class="node-expand" type="text" icon="chevron-down" v-if="data.expand"></Button>
          <Button class="node-expand" type="text" icon="chevron-right" v-else></Button>
        </span>
        <input class="node-name" v-model="data.name" />
        <span class="node-menu">
          <span class="menu-item" title="添加同级节点" @click.stop="$emit('addBrother', $event, data)">
            <Icon type="plus-round"></Icon>
          </span>
          <span class="menu-item" title="添加下级节点" @click.stop="$emit('addChild', $event, data)">
            <Icon type="ios-plus-outline"></Icon>
          </span>
          <span class="menu-item" title=“删除” @click.stop="$emit('deleteNode', $event, data)">
            <Icon type="trash-a"></Icon>
          </span>
        </span>
      </div>
      <div
        class="children"
        v-if="data.children && data.children.length"
        v-show="data.expand">
        <my-tree
          :treeData="data.children">
        </my-tree>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-tree',
  props: {
    treeData: {
      type: Array,
      default: () => [{
        id: 1,
        name: '一级节点1',
        expand: true,
        children: [{
          id: 2,
          expand: true,
          name: '二级节点1'
        }]
      },
      {
        id: 3,
        expand: true,
        name: '一级节点2',
        children: [{
          id: 4,
          expand: true,
          name: '二级节点1'
        },
        {
          id: 5,
          expand: true,
          name: '二级节点2',
          children: [{
            id: 6,
            expand: true,
            name: '三级节点'
          }]
        }]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.children
  position relative
  padding-left 20px
.node-expand
  width 1.5rem
  height 1.5rem
  padding-left 0
  padding-right 0
  padding-bottom 0
  padding-top 0
  &:focus
    box-shadow none

.node-menu
  width 3rem
  display flex
  justify-content space-around
  .menu-item
    &:hover
      cursor pointer

.brother
  display flex
  flex-direction column
  .node
    height 1.5rem
    display flex
    align-items center
    .node-name
      // border none
      // background none
      overflow-x visible
      &:focus
        outline none
</style>
