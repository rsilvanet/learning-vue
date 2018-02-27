<template>
    <div id="app">
        <h3>Got jokes?</h3>
        <button class="btn btn-primary" v-on:click="initJokes">Random Jokes</button>
        <br>
        <br>
        <div class="col-md-12">
            <Joke v-for="(joke,index) in $store.state.jokes" v-bind:key="index" v-bind:joke="joke" />
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Joke from './Joke.vue';

    export default {
        methods: mapActions([
            'initJokes'
        ]),
        components: {
            Joke
        }
    };
</script>