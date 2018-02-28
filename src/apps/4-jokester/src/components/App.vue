<template>
    <div id="app">
        <h3>Got jokes?</h3>
        <button class="btn btn-primary" v-on:click="initJokes">Random ten jokes</button>
        <button class="btn btn-primary" v-on:click="addJoke">Add a joke</button>
        <br>
        <span v-for="(type) in types" v-bind:key="type">
            <input type="checkbox" v-bind:value="type" v-model="checkedTypes">
            <label>{{type}}</label>&nbsp;
        </span>
        <br>
        <div class="col-md-12">
            <Joke 
                v-for="(joke,index) in $store.state.jokes"
                v-show="checkedTypes.includes(joke.type)"
                v-bind:key="index" 
                v-bind:joke="joke"
                v-bind:index="index" />
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Joke from './Joke.vue';

    export default {
        data() {
            return {
                types: [ 'general', 'knock-knock', 'programming'],
                checkedTypes: [ 'general', 'knock-knock', 'programming']
            };
        },
        methods: mapActions([
            'initJokes',
            'addJoke'
        ]),
        components: {
            Joke
        }
    };
</script>