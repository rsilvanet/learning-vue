<template>
    <div class="form-inline">
        <h3>Sign In</h3>
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
            <button 
                class="btn btn-primary"
                v-on:click="signIn">
                Sign In
            </button>
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
            }
        },
        methods: {
            signIn() {
                FirebaseApp.auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .catch(error => {
                        this.error = error;
                    });
            }
        }
    }
</script>
