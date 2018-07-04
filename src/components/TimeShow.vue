<template>
  <div v-cloak>
    <div v-time='timeNow'></div>
    <div v-time="timeBefore"></div>
  </div>
</template>
<script>
var Time = {
  getUnix: function () {
    return (new Date()).getTime()
  },
  getTodyUnix: function () {
    var date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  },
  getYearUnix: function () {
    var date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    date.setMonth(0)
    date.setDate(1)
    return date.getTime()
  },
  getLastDate: function (time) {
    var date = new Date(time)
    var month = date.getMonth() + 1
    var day = date.getDate()
    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day
    return date.getFullYear() + '-' + month + '-' + day
  },
  getFormatTime: function (timestamp) {
    var now = this.getUnix()
    var today = this.getTodyUnix()
    // var year = this.getYearUnix()
    var detaTime = (now - timestamp) / 1000
    var tip = ''
    if (detaTime <= 0) {
      tip = '刚刚'
    } else if (Math.floor(detaTime / 60) <= 0) {
      tip = Math.floor(detaTime / 60) + '秒前'
    } else if (detaTime < 3600) {
      tip = Math.floor(detaTime / 60) + '分钟前'
    } else if (timestamp - today >= 0) {
      tip = Math.floor(detaTime / 3600) + '小时前'
    } else if (detaTime / (3600 * 24) <= 31) {
      tip = Math.ceil(detaTime / (3600 * 24)) + '天前'
    } else {
      tip = this.getLastDate(timestamp)
    }
    return tip
  }
}

export default {
  data () {
    return {
      timeNow: (new Date()).getTime(),
      timeBefore: 1488930695732
    }
  },
  directives: {
    'time': {
      bind: function (el, binding) {
        el.innerHTML = Time.getFormatTime(binding.value)
        el.__timeout__ = setInterval(function () {
          el.innerHTML = Time.getFormatTime(binding.value)
        }, 60 * 1000)
      },
      unbind: function (el) {
        clearInterval(el.__timeout__)
        delete el.__timeout__
      }
    }
  }
}
</script>
