import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import { FirebaseApp } from './firebase-app';
import Store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dashboard', component: Dashboard },
        { path: '/signin', component: Signin },
        { path: '/signup', component: Signup },        
    ]
});

FirebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        Store.dispatch('signIn', user);
        router.push('/dashboard');
    }
    else {
        router.replace('/signin');
    }
});

new Vue({
    el: '#app',
    router: router,
    store: Store,
    render: h => h(App)
});