<template>
    <div class="sign_up">
        <div class="sign_up_header">
            <font-awesome-icon icon="running" class="logo" />
            <router-link to="/" class='close'>
                <font-awesome-icon icon="times" />
            </router-link>
        </div>
        <div class="sign_up_body">
            <SignUpForm />
        </div>
    </div>
</template>

<script>
import SignUpForm from '../components/Onboarding/SignUpForm'

export default {
    name: 'signUp',
    components: {
        SignUpForm
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/_app';

.sign_up {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 5;
    min-height: 100vh;
    background-color: $backgroundGrey;
    .sign_up_header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        display: grid;
        padding: 1em;
        background-color: $backgroundGrey;
        grid-template-columns: repeat(3, 33.3%);
        font-size: 1.5em;
        z-index: 20;
        .close {
            color: $standardText;
            grid-column: 3 / span 1;
            justify-self: end;
        }
        .close:active {
            color: $standardTextActive;
        }
        .logo {
            color: $linkGreen;
            justify-self: start;
            font-size: 1.2em;
        }
    }
    .sign_up_body {
        margin-top: 4em;
    }
}
</style>
