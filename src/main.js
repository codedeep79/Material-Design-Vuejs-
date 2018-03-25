
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Declare librarys
Vue.use(Vuetify);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
