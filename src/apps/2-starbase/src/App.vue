<template>
    <div id="app">
        <h3>{{title}}</h3>
        <button class="btn btn-primary" v-on:click="fetchCharacter()">Test</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                title: 'Generate your team'
            }
        },
        methods: {
            fetchCharacter() {
                fetch('https://swapi.co/api/people/1', {
                    method: 'GET'
                })        
                .then(response => response.json())
                .then(json => console.log(json));
            }
        }
    }
</script>