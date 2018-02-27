import Vue from 'vue';
import App from './components/App.vue';
import Store from './store';

new Vue({
    el: '#app',
    store: Store,
    render: h => h(App)
});