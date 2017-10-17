import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import header from '../components/header/header';
import login from '../components/login/login';

export default new Vuex.Store({
	state: {
		dialog: false,
	},
	modules: {
		header,
		login
	}
})
