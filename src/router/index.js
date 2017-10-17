import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);


import vPersonal from '../components/Personal/personal.vue';
import vLogin from '../components/login/login.vue';
import vRegister from '../components/register/register.vue';
import vSoftware from '../components/Software/software.vue';
import vPersonMsg from '../components/personmsg/personMsg.vue';
import vSote from '../components/Software/sote.vue';
import vRanking from '../components/Software/ranking.vue';
import vRecommend from '../components/Software/recommend.vue';
import vSoftwaresList from '../components/Software/softwarelist.vue'
import vList from '../components/Software/list.vue'
import vDetails from '../components/Software/details.vue'

import vGame from '../components/Game/game.vue';
import VGameDataList from '../components/Game/datalist.vue';


const routes = [{
	path: '/personal',
	name: 'personal',
	component: vPersonal
}, {
	path: '/login',
	name: 'login',
	component: vLogin
}, {
	path: '/register',
	name: 'register',
	component: vRegister
}, {
	path: '/software',
	redirect: '/software/recommend',
	name: 'software',
	component: vSoftware,
	children: [{
		path: 'sote',
		component: vSote
	}, {
		path: 'ranking',
		component: vRanking
	}, {
		path: 'recommend',
		component: vRecommend
	}]
}, {
	path: '/softwarelist',
	component: vSoftwaresList,
	children: [{
		path: ':list/:rote',
		component: vList
	}]
},{
	path: '/details/:name',
	component: vDetails,
}, {
	path: '/game',
	name: 'game',
	component: vGame
},{
	path: '/gamedatalist',
	name: 'gamedatalist',
	component: VGameDataList
},{
	path: '/personMsg',
	name: 'personMsg',
	component: vPersonMsg,
}];


const router = new VueRouter({
	routes,
})

router.beforeEach((to, from, next) => {
	//console.log('to', to)
	//console.log('from', to);
//	console.log(document.documentElement.scrollTop)
	next()
})

export default router;