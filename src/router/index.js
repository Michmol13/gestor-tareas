import { createRouter, createWebHistory } from 'vue-router';
import AllTasksView from '@/views/AllTasksView.vue';
import CompletedTasksView from '@/views/CompletedTasksView.vue';
import IncompleteTasksView from '@/views/IncompleteTasksView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/all', name: 'AllTasks', component: AllTasksView },
  { path: '/completed', name: 'CompletedTasks', component: CompletedTasksView },
  { path: '/incomplete', name: 'IncompleteTasks', component: IncompleteTasksView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;