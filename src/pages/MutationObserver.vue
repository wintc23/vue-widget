<template>
  <div class="mutaition-container">
    <div class="resize-element">
      <span>改变大小试试</span>
      <span>
        触发了{{firedNum}}次resize事件。
      </span>
    </div>
  </div>
</template>

<script>
export default {
  showName: '监听DOM变化',
  data () {
    return {
      observer: null,
      firedNum: 0,
      recordOldValue: {
        width: '0',
        height: '0'
      }
    }
  },
  mounted () {
    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    let element = document.querySelector('.resize-element')
    this.observer = new MutationObserver((mutationList) => {
      for (let mutation of mutationList) {
        console.log(mutation)
      }
      let width = getComputedStyle(element).getPropertyValue('width')
      let height = getComputedStyle(element).getPropertyValue('height')
      if (width === this.recordOldValue.width && height === this.recordOldValue.height) return
      this.recordOldValue = {
        width,
        height
      }
      this.firedNum += 1
    })
    this.observer.observe(element, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })
  },
  beforeDestroyed () {
    if (this.observer) {
      this.observer.disconnect()
      this.observer.takeRecords()
      this.observer = null
    }
  }
}
</script>

<style lang="stylus" scoped>
.mutaition-container
  position relative
  height 100%
  display flex
  justify-content center
  align-items center
  .resize-element
    height 10rem
    width 10rem
    overflow auto
    resize both
    box-shadow 0 0 1px 1px #3361D8
    border-radius 2px
    display flex
    flex-direction column
    justify-content center
    align-items center
</style>
