<template>
  <div>
    <SingleBlank question="你今年多大了" v-model="data"></SingleBlank>
    <MultipleBlank :questions="questions"></MultipleBlank>
  </div>
</template>
<script>
import SingleBlank from './SingleBlank'
import MultipleBlank from './MultipleBlank'

export default {
  data () {
    return {
      data: '',
      questions: [
        {
          question: '你是男的还是女的？'
        },
        {
          question: '你是男的还是女的？'
        },
        {
          question: '你是男的还是女的？'
        }
      ]
    }
  },
  components : {
    SingleBlank,
    MultipleBlank
  }
}
</script>
