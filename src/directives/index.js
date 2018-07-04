/**
 * 自定义指令，适用于Dom底层操作
 * 指令名为文件名，文件名为驼峰式命名，含多个单词时以短横线分隔使用指令。
 * 例如使用clickCopy指令。 <div v-click-copy></div>
 */

import Vue from 'vue'
const files = require.context('.', false, /\.js$/)

files.keys().forEach(key => {
  if (key === './index.js') return
  Vue.directive(key.replace(/(\.\/|\.js)/g, ''), files(key).default)
})
