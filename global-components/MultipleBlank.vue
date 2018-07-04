
<template>
  <div class="blank">
    <single-blank v-for="(item, index) in questions" :key=index :question="item.question"></single-blank>
  </div>
</template>

<script>
import './index.js'
import SingleBlank from './SingleBlank'

export default {
  name: 'lp-blank',
  props: {
    questions: {
      default: []
    },
  },
  data () {
    return {
      currentValue: ''
    }
  },
  components: {
    SingleBlank
  }
}
</script>

