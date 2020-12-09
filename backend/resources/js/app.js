
import VueRouter from 'vue-router';
import HeaderComponent from "./components/HeaderComponent.vue";
import TaskListComponent from "./components/TaskListComponent.vue";
import TaskCreateComponent from "./components/TaskCreateComponent.vue";
import TaskShowComponent from "./components/TaskShowComponent.vue";
import TaskEditComponent from "./components/TaskEditComponent.vue";

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/tasks',
            name: 'task.list',
            component: TaskListComponent
        },
        {
            path: '/tasks/create',
            name: 'task.create',
            component: TaskCreateComponent,
        },
        {
            path: '/tasks/:taskId',
            name: 'task.show',
            component: TaskShowComponent,
            props: true
        },
        {
            path: '/tasks/:taskId/edit',
            name: 'task.edit',
            component: TaskEditComponent,
            props: true,
        }
    ]
});

Vue.component('header-component', HeaderComponent);

const app = new Vue({
    el: '#app',
    router,
});
