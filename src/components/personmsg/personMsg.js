import Vue from 'vue';
import {
	baseUrl
} from '../../util/baseUrl';

const state = {
	data: {
		personal: '',
		nickname: '',
		elephone: '',
		gender: '',
		birthday: '',
		email: ''
	},
	changeMsg:{

	}
};

const mutations = {

}

const actions = {
	login({
		state,
		rootState,
		commit
	}, data) {
		console.log(data)
		rootState.dialog = true;
		Vue.axios({
				method: 'post',
				url: baseUrl + '/login',
				data: {
					data
				}
			})
			.then(response => {
				rootState.dialog = false;
				console.log(response.data)
				state.data = response.data.data[0];
			})
	},
	update({
		rootState,
		state,
		commit
	}, data) {
		rootState.dialog = true;
		Vue.axios({
				method: 'post',
				url: baseUrl + '/upload',
				data: {
					data
				}
			})
			.then(response => {
				rootState.dialog = false;
				console.log(response.data);
				state.changeMsg = response.data;
			})
	}
}

const getters = {

}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}