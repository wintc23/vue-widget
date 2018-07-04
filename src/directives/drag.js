function inserted (el, binding, vNode) {
  el.setAttribute('style', 'position: fixed; z-index: 9999')
}

function bind (el, bindding, vNode) {
  el.setAttribute('draggable', true)
  let left, top, width, height
  el._dragstart = function (event) {
    event.stopPropagation()
    left = event.clientX - el.offsetLeft
    top = event.clientY - el.offsetTop
    width = el.offsetWidth
    height = el.offsetHeight
  }
  el._dragEnd = function (event) {
    event.stopPropagation()
    left = event.clientX - left
    top = event.clientY - top
    // 限制拖出边界
    left = Math.min(document.body.clientWidth - width, left)
    left = Math.max(0, left)
    top = Math.min(document.body.clientHeight - height, top)
    top = Math.max(0, top)
    el.style.left = left + 'px'
    el.style.top = top + 'px'
    el.style.width = width + 'px'
    el.style.height = height + 'px'
  }
  el._documentAllowDraop = function (event) {
    event.preventDefault()
  }
  document.body.addEventListener('dragover', el._documentAllowDraop)
  el.addEventListener('dragstart', el._dragstart)
  el.addEventListener('dragend', el._dragEnd)
}

function unbind (el, bindding, vNode) {
  document.body.removeEventListener('dragover', el._documentAllowDraop)
  el.removeEventListener('dragstart', el._dragstart)
  el.removeEventListener('dragend', el._dragEnd)
  delete el._documentAllowDraop
  delete el._dragstart
  delete el._dragEnd
}

export default {
  bind,
  unbind,
  inserted
}
