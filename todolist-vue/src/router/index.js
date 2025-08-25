import { createRouter, createWebHistory } from "vue-router";
import TaskListPage from "@/pages/TaskListPage.vue";
import TaskPage from "@/pages/TaskPage.vue";

const routes = [
  { path: "/", name: "list", component: TaskListPage },
  { path: "/tasks/add", name: "add", component: TaskPage },
  { path: "/tasks/edit/:id", name: "edit", component: TaskPage, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
