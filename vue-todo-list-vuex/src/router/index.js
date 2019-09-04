import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import TodoList from '../components/TodoList.vue'
import My from '../components/My.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/Home/:userName',
            component: Home,
            props: true,
            children: [{
                path: 'TodoList',
                component: TodoList
            },
            {
                path: 'My',
                component: My
            }]
        }

    ]
})
