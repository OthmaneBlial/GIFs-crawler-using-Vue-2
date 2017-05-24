// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false


import Axios from 'axios';

Axios.defaults.baseURL = process.env.API_LOCATION;
Object.defineProperty(Vue.prototype, 'axios', {
  get() {
    return Axios;
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
