import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import header from '../components/header/header';
import login from '../components/login/login';
import register from '../components/register/register';

export default new Vuex.Store({
	state: {
		dialog: false
	},
	modules: {
		header,
		login,
		register
	}
})

