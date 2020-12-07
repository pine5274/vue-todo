
import VueRouter from 'vue-router';
import HeaderComponent from "./components/HeaderComponent.vue";
import TaskListComponent from "./components/TaskListComponent.vue";
import TaskShowComponent from "./components/TaskShowComponent.vue";

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
            path: '/tasks/:taskId',
            name: 'task.show',
            component: TaskShowComponent,
            props: true
        },
    ]
});

Vue.component('header-component', HeaderComponent);

const app = new Vue({
    el: '#app',
    router,
});
