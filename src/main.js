import Vue from 'vue';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';

import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/common.css';
//import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource);
Vue.use(ElementUI);

//console.log(Vue.http)

new Vue({
	el: '#app',
	render: h=>h(App),
	router,
	store
})