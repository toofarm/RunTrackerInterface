<template>
    <div class="sign_up_form">
        <h2>Sign Up</h2>
        <div class="sub_head">
            Or <router-link to="/login">log in to your account</router-link>
        </div>
        <div class="form_fields">
            <SignUpInput
                :name="fields.email.name"
                :label="fields.email.label"
                :type="fields.email.type"
                :valid="fields.email.valid" 
                :validator="emailValidator"
            />
            <SignUpInput
                :name="fields.firstName.name"
                :label="fields.firstName.label"
                :type="fields.firstName.type"
                :valid="fields.firstName.valid" 
                :validator="firstNameValidator"
            />
            <SignUpInput
                :name="fields.lastName.name"
                :label="fields.lastName.label"
                :type="fields.lastName.type"
                :valid="fields.lastName.valid" 
                :validator="lastNameValidator"
            />
            <SignUpInput
                v-on:focusing="passwordFocus = true"
                :name="fields.password.name"
                :label="fields.password.label"
                :type="fields.password.type"
                :valid="fields.password.valid" 
                :validator="passwordValidator"
            />
            <ul
                v-if="passwordFocus" 
                class="pw_validation"
            >
                <li :class="{ valid: passwordParams.length }">
                    Minimum length 8 characters
                </li>
                <li :class="{ valid: passwordParams.capitals }">
                    Must contain a capital letter
                </li>
                <li :class="{ valid: passwordParams.numbers }">
                    Must contain a number
                </li>
                <li :class="{ valid: passwordParams.specials }">
                    Must contain a special character (!,._-)
                </li>
            </ul>
        </div>
        <button 
        @click="createUser"
        :disabled="!inputValid"> Sign Up </button>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
import SignUpInput from './SignUpInput'

export default {
    name: 'signUpForm',
    data() {
        return {
            fields: {
                email: {
                    name: 'email',
                    label: 'Email Address',
                    type: 'email',
                    valid: null
                },
                firstName: {
                    name: 'firstName',
                    label: 'First Name',
                    type: 'text',
                    valid: null
                },
                lastName: {
                    name: 'lastName',
                    label: 'Last Name',
                    type: 'text',
                    valid: null
                },
                password: {
                    name: 'password',
                    label: 'Password',
                    type: 'password',
                    valid: null
                }
            },
            passwordFocus: false,
            passwordParams: {
                length: false,
                capitals: false,
                numbers: false,
                specials: false
            }
        }
    },
    methods: {
        ...mapActions(['createUser']),
        ...mapMutations(['setUserEmail', 'setUserFirstName', 'setUserLastName', 'setUserPassword']),
        emailValidator: function (e) {
            let email = e.target.value
            this.setUserEmail(email)
            // eslint-disable-next-line
            var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
            this.fields.email.valid = reg.test(String(email).toLowerCase())
        },
        firstNameValidator: function (e) {
            let fn = e.target.value
            this.setUserFirstName(fn)
            this.fields.firstName.valid = fn.length ? true : false
        },
        lastNameValidator: function (e) {
            let ln = e.target.value
            this.setUserLastName(ln)
            this.fields.lastName.valid = ln.length ? true : false
        },
        passwordValidator: function (e) {
            let pw = e.target.value
            this.setUserPassword(pw)

            if (pw.length >= 8) this.passwordParams.length = true
            else this.passwordParams.length = false

            var caps = /[A-Z]/g
            if (caps.test(pw)) this.passwordParams.capitals = true
            else this.passwordParams.capitals = false

            var nums = /[\d]/g
            if (nums.test(pw)) this.passwordParams.numbers = true
            else this.passwordParams.numbers = false

            var specials = /[!._\-,]/g
            if (specials.test(pw)) this.passwordParams.specials = true
            else this.passwordParams.specials = false

            if (
                this.passwordParams.specials === true &&
                this.passwordParams.numbers === true &&
                this.passwordParams.capitals === true &&
                this.passwordParams.length === true
            ) {
                this.fields.password.valid = true
            } else {
                this.fields.password.valid = false
            }
        }
    },
    computed: {
        ...mapState(['token']),
        inputValid: function() {
            if (
                this.fields.email.valid === true &&
                this.fields.firstName.valid === true &&
                this.fields.lastName.valid === true &&
                this.fields.password.valid === true
            ) {
                return true
            } else {
                return false
            }
        }
    },
    components: {
        SignUpInput
    }
}
</script>


<style lang="scss" scoped>
@import "../../styles/_app";

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
