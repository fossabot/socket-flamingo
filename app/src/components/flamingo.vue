<template lang="html">
  <div id="flamingo">
    <img id="player" src="../assets/flamingo.png" alt="">
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
  sockets: {
    connect () {
      console.log('connected to server')
    },
    position ({x, y}) {
      this.flamX += x
      this.flamY += y
      document.getElementById('player').style.top = `${this.flamX}px`
      document.getElementById('player').style.left = `${this.flamY}px`
    }
  },
  methods: {
    deplacement (x, y) {
      this.$socket.emit('position', {x: x, y: y})
    }
  },
  mounted () {
    document.getElementById('player').style.top = '0'
    document.getElementById('player').style.left = '0'
    document.addEventListener('keypress', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          this.deplacement(-10, 0)
          break
        case 'ArrowDown':
          this.deplacement(10, 0)
          break
        case 'ArrowLeft':
          this.deplacement(0, -10)
          break
        case 'ArrowRight':
          this.deplacement(0, 10)
          break
        default:
          break
      }
    })
    document.getElementById('player').style.border = '1px solid black'
  }
}
</script>

<style lang="css">
#player{
  position: absolute;
  height: 100px;
}
</style>
