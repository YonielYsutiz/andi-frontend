import { createRouter, createWebHistory } from 'vue-router';
import InitialForm from '@/components/InitialForm.vue';
import AndiGraph from '@/components/AndiGraph.vue';

const routes = [
  {path: '/', component: InitialForm},
  {path: '/enterprise/detail', component: AndiGraph}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;