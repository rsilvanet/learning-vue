import Vue from 'vue';
import App from './components/App.vue';
import Store from './store';

Store.commit('INIT_JOKES', [
    { test1: 'test_joke_1' },
    { test2: 'test_joke_2' }
]);

new Vue({
    el: '#app',
    store: Store,
    render: h => h(App)
});