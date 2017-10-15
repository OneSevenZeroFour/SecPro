import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import WeUI from 'weui';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/common.css';
import $ from "./assets/js/jquery";
import rem from "./assets/js/rem";
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(WeUI);
import Vuex from 'vuex';
Vue.use(Vuex);

new Vue({
	el: '#app',
	render: h=>h(App),
	router,
	store
})