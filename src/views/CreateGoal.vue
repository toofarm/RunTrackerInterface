<template>
    <div class="sign_up">
        <div class="sign_up_header">
            <font-awesome-icon icon="running" class="logo" />
            <router-link to="/dashboard" class='close'>
                <font-awesome-icon icon="times" />
            </router-link>
        </div>
        <div class="details_body">
            <h2>Welcome to RunTracker!</h2>
            <div class="sub_head">
                Let's get some more info before we start tracking your workouts
            </div>
            <DetailsForm />
        </div>
    </div>
</template>

<script>
import DetailsForm from '../components/Onboarding/DetailsForm'

export default {
    name: 'deets',
    components: {
        DetailsForm
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
    .details_body {
        margin-top: 1.4em;
        font-size: 2em;
        padding: 1em;
        color: $standardText;
        text-align: left;
        h2 {
            margin: 0.5em 0;
            font-size: 1.2em;
            color: #222;
        }
        .sub_head {
            font-size: 0.6em;
        }
    }
}
</style>
