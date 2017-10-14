import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import vHeader from '../components/header/header.vue';
import vFooter from '../components/footer/footer.vue';
import vPersonal from '../components/Personal/personal.vue';
import vLogin from '../components/login/login.vue';
import vRegister from '../components/register/register.vue';
import vSoftware from '../components/Software/software.vue';

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
	// children: [{
	// 	path: 'headerlist',
	// 	name: 'headerlist',
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