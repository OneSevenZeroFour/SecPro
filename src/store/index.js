import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


import header from '../components/header/header';
import login from '../components/login/login';
import register from '../components/register/register';
import personMsg from '../components/personmsg/personMsg';

export default new Vuex.Store({
	state: {
		dialog: false,
		username:'',
		userImg: ''
	},
	modules: {
		header,
		login,
		register,
		personMsg
	}
})

