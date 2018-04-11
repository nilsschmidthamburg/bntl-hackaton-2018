const f = {
  turboUrl: function (query) {
    const url = "https://overpass-turbo.eu/map.html?Q="
    const prefix = "area[name=\"Baunatal\"];(way(area)[highway][access!~\"^(permissive|private)$\"]"
    const postfix = ";);out geom;"
    return url + encodeURIComponent(prefix + query + postfix)
  }
}

var app = new Vue({
  el: '#app',
  data: {
    message: 'bntl - digital - kreativ',
    src: f.turboUrl("[highway!~\"^(turning_circle|traffic_signals|footway|pedestrian|path|track|service|steps|bridleway)$\"]"),
    items: [
      {
        desc: "Alle Straßen",
        url: f.turboUrl("[highway!~\"^(turning_circle|traffic_signals|footway|pedestrian|path|track|service|steps|bridleway)$\"]")
      },
      {
        desc: "Verkehrsberuhigter Bereich (Spielstraßen)",
        url: f.turboUrl("[highway=living_street]")
      },
      {
        desc: "Tempo 30",
        url: f.turboUrl("[maxspeed=30][highway!~\"^(turning_circle|traffic_signals|footway|pedestrian|path|track|service|steps|bridleway|living_street)$\"](if: (is_number(t[maxspeed]) && t[maxspeed] <= 30))")
      },
      {
        desc: "Tempo 50",
        url: f.turboUrl("[highway!~\"^(turning_circle|traffic_signals|footway|pedestrian|path|track|service|steps|bridleway|living_street)$\"](if: (is_number(t[maxspeed]) && t[maxspeed] > 30 && t[maxspeed] < 51))")
      },
      {
        desc: "Viel zu schnell (> 50 km/h)",
        url: f.turboUrl("[highway!~\"^(turning_circle|traffic_signals|footway|pedestrian|path|track|service|steps|bridleway|living_street)$\"](if: (is_number(t[maxspeed]) && t[maxspeed] > 50) || !is_tag(maxspeed))")
      }
    ]
  },
  methods: {
    changeSrc: function () {
      this.src = "https://overpass-turbo.eu/map.html?Q="
    }
  }
});