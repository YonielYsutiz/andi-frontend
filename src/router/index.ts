import { createRouter, createWebHistory } from 'vue-router';
import InitialForm from '@/components/InitialForm.vue';
import AndiGraph from '@/components/AndiGraph.vue';
import BusinessRoundtable from '@/components/BusinessRoundtable.vue';
import ListUser from '@/components/ListUser.vue';

const routes = [
  {path: '/', component: InitialForm},
  {path: '/enterprise/detail', component: AndiGraph},
  {path: '/business-roundtable', component: BusinessRoundtable},
  {path: '/list-user', component:ListUser}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;