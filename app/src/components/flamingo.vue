<template lang="html">
  <div id="flamingo" v-bind:style="[ map.size ]">
    <img id="player"
    v-bind:style="{ marginTop: player1.style.marginTop,
      marginLeft: player1.style.marginLeft }"
    src="../assets/flamingo.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: {
        name: 'flamingo_map',
        size: {
          height: '1024px',
          width: '1024px',
        },
      },
      player1: {
        name: 'default',
        style: {
          marginTop: '800px',
          marginLeft: '0px',
        },
        x: 1,
        y: 1,
      },
    };
  },
  sockets: {
    connect() {
      console.log('connected to server');
    },
    position(playerId, newCoords) {
      this.players.player1.x = newCoords.x;
      this.playersplayer1.y = newCoords.y;
      this.positionUpdate();
    },
    flamingoJump() {
      const beforeJump = this.player1.y;
      let count = 0;
      const refreshId = setInterval(() => {
        this.player1.y += 0.25;
        this.positionUpdate();
        if (count > 60) {
          this.player1.y = beforeJump;
          this.positionUpdate();
          clearInterval(refreshId);
        }

        count += 1;
      }, 50);

      console.log('finished', this.player1.y);
    },
  },
  methods: {
    positionUpdate() {
      this.player1.style.marginTop = `${this.map.size.height.slice(0, -2) / this.player1.y}px`;
      this.player1.style.marginLeft = this.map.size.width / this.player1.x;
    },
    deplacement(x, y) {
      this.$socket.emit('position', { x, y });
    },
    jump() {
      this.$socket.emit('jump');
    },
  },
  mounted() {
    document.addEventListener('keypress', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          this.deplacement(10, 0);
          break;
        case 'ArrowDown':
          this.deplacement(-10, 0);
          break;
        case 'ArrowLeft':
          this.deplacement(0, -10);
          break;
        case 'ArrowRight':
          this.deplacement(0, 10);
          break;
        case ' ':
          console.log('espace');
          this.jump();
          break;
        default:
          break;
      }
    });
  },
};
</script>

<style lang="less">
#flamingo {
  display: relative;

  #player{
    position: absolute;
    height: 100px;
  }
}
</style>
