import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import header from '../components/header/header';

export default new Vuex.Store({
	modules: {
		header
	}
})

