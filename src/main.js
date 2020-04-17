import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store/'
import './registerServiceWorker'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faRunning, faBars, faTimes, faThumbsUp, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRunning, faBars, faTimes, faThumbsUp, faCircleNotch)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
