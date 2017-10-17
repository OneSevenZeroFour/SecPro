import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import vPersonal from '../components/Personal/personal.vue';
import xRecommend from '../components/recommend/recommend.vue';
import vLogin from '../components/login/login.vue';
import vsearch from '../components/search/search.vue';

import vRegister from '../components/register/register.vue';
import vPersonMsg from '../components/personmsg/personMsg.vue';
import vCollection from '../components/collection/collection.vue';
//中间软件路由部分
import vSoftware from '../components/Software/software.vue';
import vSote from '../components/Software/sote.vue';
import vRanking from '../components/Software/ranking.vue';
import vRecommend from '../components/Software/recommend.vue';

import vSetMsg from '../components/personmsg/setMsg.vue';
import vSoftwaresList from '../components/Software/softwarelist.vue'
import vList from '../components/Software/list.vue'
import vDetails from '../components/Software/details.vue'

//游戏部分

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
		path: ':list/:num',
		component: vList
	}]
},{
	path: '/recommend',
	name: 'recommend',
	component: xRecommend
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
},{
	path: '/setMsg/:index',
	name: 'setMsg',
	component: vSetMsg
},{
	path: '/collection',
	name: 'collection',
	component: vCollection
},{
	path: '/',
	redirect: '/recommend'
},{
	path: '/search',
	name: 'search',
	component: vsearch
}];


const router = new VueRouter({
	routes,
//	mode: 'history'
})



router.beforeEach((to, from, next) => {
	//console.log(document.body.scrollTop)
	//console.log(to,from)
	from.meta.scrollLen = document.body.scrollTop;
	next();
})

export default router;