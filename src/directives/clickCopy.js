import { Message } from 'iview'

function bind (el, binding, vNode) {
  el._clickCopy = function (event) {
    event.stopPropagation()
    let userSelect = getComputedStyle(el).getPropertyValue('user-select')
    el.setAttribute('style', 'user-select: all')
    if (document.body.createTextRange) {
      let range = document.body.createTextRange()
      range.moveToElementText(event.target)
      range.select()
    } else if (window.getSelection) {
      let selection = window.getSelection()
      let range = document.createRange()
      range.selectNodeContents(event.target)
      selection.removeAllRanges()
      selection.addRange(range)
    }
    document.execCommand('Copy', 'false', null)
    el.setAttribute('style', 'user-select: ' + (userSelect || 'none'))
    Message.success('内容已复制到剪贴板')
  }
  el.addEventListener('click', el._clickCopy)
}

function unbind (el, binding, vNode) {
  el.removeEventListener('click', el._clickCopy)
  delete el._clickCopy
}

export default {
  bind,
  unbind
}
