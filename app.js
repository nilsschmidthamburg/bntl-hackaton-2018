var app = new Vue({
  el: '#main',
  data: {
    message: 'bntl - digital - kreativ',
    src: 'https://overpass-turbo.eu'
  },
  methods: {
    changeSrc: function () {
      this.src = "https://overpass-turbo.eu/map.html?Q=area%5Bname%3D%22Baunatal%22%5D%3B%0A(way(area)%5Bhighway%5D%5Bmaxspeed%3D30%5D%3B%3E%3B)%3B%0Aout%20meta%3B%0A"
    }
  }
})