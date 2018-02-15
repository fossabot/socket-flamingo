<template lang="html">
  <div id="flamingo">
    <img src="../assets/flamingo.png" alt="" v-on:click="deplacement(100,100)">
  </div>
</template>

<script>
export default {
  data () {
    return {
      flamX: 0,
      flamY: 0
    }
  },
  mounted () {
  },
  sockets: {
    connect () {
      console.log('connected')
    },
    position (e) {
      console.log(e)
    }
  },
  methods: {
    deplacement (x, y) {
      this.$socket.emit('position', 'hello')
      console.log('yes')
    }
  }
}
</script>

<style lang="css">
img{
  height: 100px;
}
</style>
