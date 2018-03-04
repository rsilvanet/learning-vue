<template>
    <div class="form-inline">
        <h3>Sign Up</h3>
        <div class="form-group">
            <input 
                type="text" 
                class="form-control" 
                placeholder="E-mail" 
                v-model="email" 
            />
            <input 
                type="password" 
                class="form-control" 
                placeholder="Password" 
                v-model="password" 
            />
            <br><br>
            <button 
                class="btn btn-primary"
                v-on:click="signUp">
                Sign Up
            </button>
            <br>
            <router-link to="/signin">Already a user?</router-link>
            <br>            
            <p>{{error.message}}</p>
            <br>
        </div>
    </div>
</template>

<script>
    import { FirebaseApp } from '../firebase-app';

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: {
                    message: ''
                }
            };
        },
        methods: {
            signUp() {
                FirebaseApp.auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .catch(error => {
                        this.error = error;
                    });
            }
        }
    };
</script>