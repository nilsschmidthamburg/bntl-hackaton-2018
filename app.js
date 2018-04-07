Vue.component('osm', {
    props: ['src'],
    template: '#iframe'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'bntl - digital - kreativ'
  }
});