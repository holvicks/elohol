import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueScrollTo from 'vue-scrollto'
import { loadFonts } from './plugins/webfontloader'
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

loadFonts()
createApp(App)
  .use(router)
  .use(VueScrollTo)
  .use(store)
  .use(vuetify)
  .mount('#app')
