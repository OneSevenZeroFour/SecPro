import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import vHeader from '../components/header/header.vue';
import vFooter from '../components/footer/footer.vue';
import vPersonal from '../components/Personal/personal.vue';
import vLogin from '../components/login/login.vue';
import vRegister from '../components/register/register.vue';
import vSoftware from '../components/Software/software.vue';
import vGame from '../components/Game/game.vue';
import vPersonMsg from '../components/personmsg/personMsg.vue';

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
}, {
	path: '/software',
	name: 'software',
	component: vSoftware
}, {
	path: '/game',
	name: 'game',
	component: vGame
}, {
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
	console.log(document.documentElement.scrollTop)
	next()
})

export default router