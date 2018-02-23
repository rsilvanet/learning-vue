<template>
    <div class="col-md-4" v-on:click="switchItem()">
        <div class="item-card">
            <div class="card-block">
                <h4 class="card-title">{{item.name}}</h4>
                <div v-for="(value, key, index) in item" v-bind:key="key">
                    <div v-if="index < 5">
                        <strong>{{key}}</strong>: {{value}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['passedItem', 'type'],
        data() {
            return {
                item: {}
            };
        },
        methods: {
            switchItem() {
                let random = Math.floor(Math.random() * 63) + 1;
                let address = 'https://swapi.co/api/' + this.type + '/' + random;

                fetch(address, {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(json => this.item = json) ;
            }
        },
        created() {
            this.item = this.passedItem;
        }
    }
</script>