
<template>
  <div class="blank">
    <div class="question">{{ question }}</div>
    <lp-input :value="currentValue" class="input"></lp-input>
  </div>

</template>

<script>
import { Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'lp-blank',
  props: {
    question: '',
  },
  data () {
    return {
      currentValue: ''
    }
  },
  components: {
    'lp-input': Input,
  }
}
</script>

<style lang="stylus" scoped>
.blank
  padding 0.1rem
  margin auto
  display flex
  flex-direction column
  font-size 1rem
  .question
    margin 0.1rem 0
</style>

