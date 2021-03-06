import Vue from 'vue';
import {
    baseUrl
} from '../../util/baseUrl';
//import merge from 'merge';

const state = {
    data: {}
};

const mutations = {

}

const actions = {
    register({
        state,
        rootState,
        commit
    }, data) {
        //console.log(data)
        rootState.dialog = true;
        Vue.axios({
                method: 'post',
                url: baseUrl + '/register',
                data: {
                    data
                }
            })
            .then(response => {
                rootState.dialog = false;
                console.log(response)
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