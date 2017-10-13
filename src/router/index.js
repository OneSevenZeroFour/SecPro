import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import vHeader from '../components/header/header.vue';
import vFooter from '../components/footer/footer.vue';
import vPersonal from '../components/Personal/personal.vue';

const routes = [{
	path: '/header',
	name: 'header',
	component: vHeader
},{
	path: '/footer',
	name: 'footer',
	component: vFooter
},{
	path: '/personal',
	name: 'personal',
	component: vPersonal
}];

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	next()
})

export default router

