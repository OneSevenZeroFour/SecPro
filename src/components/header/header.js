import Vue from 'vue';

const state = {
	header: ''
};

const mutations = {
	setHeader(state, data){
		state.header = data
	}
};

const actions = {
	headerSend({commit}, data){
		Vue.http.get('http://localhost:3000/detail')
		.then(response=> {
			commit('setHeader', response.data)
		})
	}
};

const getters = {
	getHeader(state){
		return state.header
	}
}
export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}