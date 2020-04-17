<template>
    <div class="sign_up_form">
        <h2>Log in</h2>
        <div class="sub_head">
            Or <router-link to="/sign-up">sign up for an account</router-link>
        </div>
        <div class="form_fields">
            <div class='input_wrap'> 
                <input type="text" name='email' id='email' v-model="email" @keyup="checkValidation" required />
                <label for="email">Email Address</label>
            </div>
            <div class='input_wrap'> 
                <input type="password" name='password' id='password' v-model="password" @keyup="checkValidation" required />
                <label for="password">Password</label>
            </div>
            <button
                :disabled="!valid"
                @click="loginUser({ email, password})">
                Log in
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'loginForm',
    data() {
        return {
            email: '',
            password: '',
            valid: false
        }
    },
    methods: {
        ...mapActions(['loginUser']),
        checkValidation: function() {
            if (this.email !== '' && this.password !== '') this.valid = true
            else this.valid = false
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../styles/_app";

.sign_up_form {
    padding: 2em 3em;
    text-align: left;
    position: relative;
    h2 {
        margin: 0.3em 0;
        font-size: 1.7em;
    }
    .sub_head {
        a {
            color: $linkGreen;
        }
    }
    .form_fields {
        margin-top: 1em;
        .pw_validation {
            list-style-type: circle;
            li {
                color: red;
            }
            .valid {
                color: $successGreen;
                list-style: disc;
            }
        }
    }
    .input_wrap {
        @extend %text-input;
    }
    button {
        width: 100%;
        font-size: 1.8em;
        margin: 0.3em 0;
        border-radius: 5px;
        padding: 0.3em;
        background-color: green;
        color: white;
        font-weight: bolder;
    }
    button:disabled {
        pointer-events: none;
        background-color: #888;
    }
}
</style>
