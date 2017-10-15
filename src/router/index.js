import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import vHeader from '../components/header/header.vue';
import vFooter from '../components/footer/footer.vue';
import vPersonal from '../components/Personal/personal.vue';
import vLogin from '../components/login/login.vue';
import vRegister from '../components/register/register.vue';


import vSoftware from '../components/Software/software.vue';
import vSote from '../components/Software/sote.vue';
import vRanking from '../components/Software/ranking.vue';
import vRecommend from '../components/Software/recommend.vue';
import vSoftwaresList from '../components/Software/softwarelist.vue'
import vList from '../components/Software/list.vue'

//import vGame from '../components/Game/game.vue';


const routes = [{
	path: '/header',
	name: 'header',
	component: vHeader
}, {
	path: '/footer/:id',
	name: 'footer',
	component: vFooter
}, {
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
},{
	path: '/software',
	redirect: '/software/recommend',
	name: 'software',
	component: vSoftware,
	children: [{
		path: 'sote',
		component: vSote
	},{
		path: 'ranking',
		component: vRanking
	},{
		path: 'recommend',
		component: vRecommend
	}]
},{
	path: '/softwarelist',
	component: vSoftwaresList,
	children: [{
		path: ':list',
		component: vList
	}]
},{
	path:'/game',
	name:'game',
//	component:vGame
}];

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	next()
})

export default router;

