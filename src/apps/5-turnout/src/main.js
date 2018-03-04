import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Signin from './components/Signin.vue';
import { FirebaseApp } from './firebase-app';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dashboard', component: Dashboard },
        { path: '/signin', component: Signin }
    ]
});

FirebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        router.push('/dashboard');
    }
    else {
        router.replace('/signin');
    }
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});