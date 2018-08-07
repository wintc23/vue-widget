const files = require.context('.', false, /\.vue$/)
let componentList = {}
files.keys().forEach(key => {
  if (key === './index.js') return
  console.log(key.replace(/(\.\/|\.vue)/g, ''))
  componentList[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})

export default componentList
