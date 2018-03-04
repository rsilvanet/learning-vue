<template>
    <div class="">
        <h3>Events Dashboard</h3>
        <button 
            class="btn btn-danger btn-sm signout-btn" 
            v-on:click="signOut">
            Sign Out
        </button>
        <hr>
        <AddEvent />
        <hr>
        <div class="col-md-12">
            <EventItem
                v-for="(item, index) in this.$store.state.events"
                v-bind:event="item"
                v-bind:key="index"
            />
        </div>
    </div>
</template>

<script>
    import { FirebaseApp, EventsRef } from '../firebase-app';
    import AddEvent from './AddEvent.vue';
    import EventItem from './EventItem.vue';

    export default {
        methods: {
            signOut() {
                this.$store.dispatch('signOut');
                FirebaseApp.auth().signOut();
            }
        },
        components: {
            AddEvent,
            EventItem
        },
        mounted() {
            EventsRef.on('value', snap => {
                let events = [];
                snap.forEach(event => {
                    events.push(event.val());
                });
                this.$store.dispatch('setEvents', events);
            });
        }
    }
</script>
