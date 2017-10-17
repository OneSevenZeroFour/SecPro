import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper'

//
import './assets/css/common.css';
import 'swiper/dist/css/swiper.css'

//import 'element-ui/lib/theme-default/index.css'

Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)

//console.log(Vue.http)

new Vue({
	el: '#app',
	render: h=>h(App),
	router,
	store
})