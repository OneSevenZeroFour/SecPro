import Vue from 'vue';
import {baseUrl} from '../../util/baseUrl';

const state = {
	data: {}
};

const mutations = {

}

const actions = {
	getMsg({commit, state, rootState}, data){
		Vue.axios.post({
			method: 'post',
			url: baseUrl + '/',
			data: {
				data
			}
		})
		.then(response=>{
			
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