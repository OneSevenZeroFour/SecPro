import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/common.css';

Vue.use(VueAxios, axios)
Vue.use(ElementUI);


new Vue({
	el: '#app',
	render: h=>h(App),
	router,
	store
})