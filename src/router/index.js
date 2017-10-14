import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import vHeader from '../components/header/header.vue';
import vFooter from '../components/footer/footer.vue';
import vPersonal from '../components/Personal/personal.vue';
import vLogin from '../components/login/login.vue';
// import vSoftware from '../components/Software/software.vue';
import vGame from '../components/Game/game.vue';
// 

const routes = [{
	path: '/header',
	name: 'header',
	component: vHeader
}, {
	path: '/footer',
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
},{
	path:'/game',
	name:'game',
	component:vGame
// }, {
// 	path: '/software',
// 	name: 'software',
// 	component: vSoftware
	// children: [{
	// 	path: '/:headerlist',
	// 	component: vSoftWareHeader
	// }]
}];

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	next()
})

export default router