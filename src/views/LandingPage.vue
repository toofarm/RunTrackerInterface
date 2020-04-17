<template>
    <div class="intro_hero">
        <h1>RunTracker</h1>
        <p>You do the sweating, we'll handle the numbers</p>
        <router-link to="/sign-up">
            <button>
                SIGN UP  
            </button>
        </router-link>
        <router-link to="/login">  
            <button>
                LOG IN
            </button>
        </router-link>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'landingPage',
    methods: {
        ...mapMutations(['setHamburgerMenu'])
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/_app';

.intro_hero {
    color: white;
    background-color: $linkGreen;
    height: 100vh;
    text-align: left;
    padding: 2em;
    color: $promptTan;
    h1 {
        font-size: 3.5em;
        margin: 0;
        font-style: italic;
    }
    p {
        font-size: 2em;
        margin-bottom: 3em;
    }
    a {
        text-decoration: none;
    }
    a:active {
        color: $standardTextActive;
        text-decoration: underline;
    }
    button {
        display: block;
        background-color: #F9F9F9;
        margin: 1em auto;
        text-align: center;
        width: 100%;
        font-size: 2em;
        color: $standardText;
        font-weight: bold;
        padding: 0.3em;
        border-radius: 5px;
    }
}
</style>
