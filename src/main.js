import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';



library.add(fas, faStar);

import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'



const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(BootstrapVue3)


app.mount('#app')


