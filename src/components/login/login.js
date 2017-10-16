import Vue from 'vue';
import {baseUrl} from '../../util/baseUrl';

const state = {
	data: {}
};

const mutations = {

}

const actions = {
	login({
		state,
		rootState,
		commit
	}, data) {
		//console.log(data)
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
				rootState.username = response.data.data[0].nickname || response.data.data[0].elephone;
				rootState.userImg = response.data.data[0].avatar || baseUrl + '/src/assets/img/touxiang.jpg';
				state.data = response.data;

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