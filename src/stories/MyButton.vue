<template>

  <div>
  <button class="button-styles" @click="onClick">
    <slot></slot>
  </button>
  {{data}}
  </div>
</template>

<script>
  export default {
    name: 'my-button',
    data () {
      return {
        data: {

        }
      }
    },
    methods: {
      onClick () {
        this.$emit('click');
      }
    },
    mounted () {
      let list = ['a', 'b']
      this.data = {...list}
    }
  }
</script>

<style>
  .button-styles {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #FFFFFF;
    cursor: pointer;
    font-size: 15pt;
    padding: 3px 10px;
    margin: 10px;
  }
</style>
