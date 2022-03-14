import firstStep from './components/firstStep.vue';
import secondStep from './components/secondStep.vue';
import landingPage from './components/landingPage.vue';
   
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'landingPage',
        component: landingPage
    },
    {
        path: '/1',
        name: 'firstStep',
        component: firstStep
    },
    {
        path: '/2',
        name: 'secondStep',
        component: secondStep
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
  });
  
export default router;