<template>
  <div class="key-test">
    <div class="row" v-for="(item, idx) of list" :key="idx">
      <Select v-model="item.label" @on-change="changeOptions">
        <Option v-for="(option, idx) of options" :value="option.value" :key="idx">
          {{ option.label }}
        </Option>
      </Select>
      <Button type="primary" @click.stop="addItem(idx+1)">增加</Button>
      <Button type="primary" @click.stop="removeItem(idx)">删除</Button>
    </div>
  </div>
</template>

<script>
export default {
  lock: true,
  data () {
    return {
      list: [{
        label: '',
        id: 0
      }],
      options: [
        {
          value: 1,
          label: 'option1'
        },
        {
          value: 2,
          label: 'option2'
        }
      ]
    }
  },
  methods: {
    addItem (idx) {
      let data = {
        label: '',
        id: 0
      }
      this.list.splice(idx, 0, data)
    },
    removeItem (idx) {
      if (this.list.length > 1) {
        this.list.splice(idx, 1)
      }
    },
    changeOptions (value) {
      this.options.unshift({
        value: this.options.length + 1,
        label: 'option' + (this.options.length + 1)
      })
      let idx = this.options.findIndex(item => item.value === value)
      if (idx !== -1) {
        this.options.splice(idx, 1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.key-test
  text-align left
  padding 2rem
  .row
    border-radius 5px
    padding 0.2rem
    margin 0.2rem
    input
      height 2rem
      border-radius 5px
</style>
