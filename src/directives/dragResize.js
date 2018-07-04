const DISTANCE = 10

function calDirection (event, node) {
  let dir = ''
  let oldClientX = event.clientX
  let oldClientY = event.clientY
  let width = node.offsetWidth
  let height = node.offsetHeight
  let left = node.offsetLeft
  let top = node.offsetTop
  if (oldClientX > left + width - DISTANCE) {
    dir = 'right'
  } else if (oldClientX < left + DISTANCE) {
    dir = 'left'
  }
  if (oldClientY < top + DISTANCE) {
    dir = 'up'
  } else if (oldClientY > top + height - DISTANCE) {
    dir = 'down'
  }
  return dir
}

function mouseDown (event, node) {
  let oldClientX = event.clientX
  let oldClientY = event.clientY
  let width = node.offsetWidth
  let height = node.offsetHeight
  let left = node.offsetLeft
  let top = node.offsetTop
  let dir = calDirection(event, node)
  if (dir) {
    event.preventDefault()
  }
  function mouseMove (event) {
    switch (dir) {
      case 'right':
        node.style['width'] = width + (event.clientX - oldClientX) + 'px'
        break
      case 'left':
        node.style['width'] = width + (oldClientX - event.clientX) + 'px'
        node.style['left'] = left - (oldClientX - event.clientX) + 'px'
        break
      case 'up':
        node.style['top'] = top - (oldClientY - event.clientY) + 'px'
        node.style['height'] = height + (oldClientY - event.clientY) + 'px'
        break
      case 'down':
        node.style['height'] = height + (event.clientY - oldClientY) + 'px'
        break
    }
  }
  function mouseUp (event) {
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
  }

  if (dir) {
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }
}

function changeCursor (event, node) {
  let dir = calDirection(event, node)
  if (!dir) {
    node.style.cursor = 'default'
  } else if (dir === 'left') {
    node.style.cursor = 'w-resize'
  } else if (dir === 'right') {
    node.style.cursor = 'e-resize'
  } else if (dir === 'up') {
    node.style.cursor = 'n-resize'
  } else if (dir === 'down') {
    node.style.cursor = 's-resize'
  }
}

function bind (el, binding, vNode) {
  el._mouseDown = function (event) {
    mouseDown(event, el)
  }
  el._mouseMove = function (event) {
    changeCursor(event, el)
  }
  el.addEventListener('mousedown', el._mouseDown)
  el.addEventListener('mousemove', el._mouseMove)
}

function unbind (el, binding, vNode) {
  el.removeEventListener('mousedown', el._mouseDown)
  el.removeEventListener('mousemove', el._mouseMove)
  delete el._mouseDown
  delete el._mouseMove
}

export default {
  bind,
  unbind
}
