<template>
  <div>
    <div class="alert show" v-if="messages.length!==0">
      <ul>
        <li v-for="(msg, idx) in messages" v-html="msg" :key="idx"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      messages: [],
      bgColor: ''
    }
  },
  methods: {
    notify (msg) {
      this.messages.push(msg)
      setTimeout(() => {
        if (this.messages.length && this.messages[0] === msg) {
          this.messages.shift()
        }
      }, 1000)
    }
  },
  mounted () {
    this.notify('提示')
  }
}
</script>

<style scoped>
.alert {
  transform: translate(-50%, -100%);
  left: 50%;
  top: 50%;
  position: fixed;
  text-align: center;
  margin: auto;
}

li {
  font-size: 36px;
  color: white;
  background-color: rgba(0,0,0,0.5);
  margin: 5px auto;
  border-radius: 5px;
  padding: 5px 20px;
  animation: animateFade 2s; /*chrome 43.0+, IE 10.0+, firefox 16.0+, safari 9.0+, opera 30.0+*/
  -moz-animation: animateFade 2s; /* firefox 5.0+ */
  -webkit-animation: animateFade 2s; /* safari4.0+ & chrome 4.0+ */
  -o-animation: animateFade 2s; /* opera 12.0+*/
}

@keyframes animateFade {
  from {
    background-color: rgba(0,0,0,1);
    color: rgba(255,255,255,1)
  }
  to {
    background-color: rgba(0,0,0,0.6);
    color: rgba(200,200,200,0.6);
  }
}

@-moz-keyframes animateFade {
  from {
    background-color: rgba(0,0,0,1);
    color: rgba(255,255,255,1)
  }
  to {
    background-color: rgba(0,0,0,0.6);
    color: rgba(200,200,200,0.6);
  }
}

@-webkit-keyframes animateFade {
  from {
    background-color: rgba(0,0,0,1);
    color: rgba(255,255,255,1)
  }
  to {
    background-color: rgba(0,0,0,0.6);
    color: rgba(200,200,200,0.6);
  }
}

@-o-keyframes animateFade {
  from {
    background-color: rgba(0,0,0,1);
    color: rgba(255,255,255,1)
  }
  to {
    background-color: rgba(0,0,0,0.6);
    color: rgba(200,200,200,0.6);
  }
}
</style>
