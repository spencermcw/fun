var app = new Vue({
  el: '#app',
  data: {
    name: 'MTG Life Counter',
    players: [{
      life: 20,
      // color: 'blue',
    }, {
      life: 20
    }]
  },
  methods: {
    addLife(player, amount) {
      this.players[player].life += amount
    },
    removeLife (player, amount) {
      this.players[player].life -= amount
    }
  }
})