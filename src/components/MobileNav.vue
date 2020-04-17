<template>
    <div class="nav_mobile">
        <font-awesome-icon icon="times" 
        @click="setHamburgerMenu(false)"/>
        <ul v-if="token">
            <li @click="setHamburgerMenu(false)">
                <router-link to="/dashboard">Home</router-link>
            </li>
            <li @click="setHamburgerMenu(false)">
                <router-link to="/about">About</router-link>
            </li>
            <li @click="doLogOut">
                Log out
            </li>
        </ul>
        <ul v-else>
            <li @click="setHamburgerMenu(false)">
                <router-link to="/sign-up">Sign Up</router-link>
            </li>
            <li @click="setHamburgerMenu(false)">
                <router-link to="/login">Log In</router-link>
            </li>
            <li @click="setHamburgerMenu(false)">
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { router } from '../router'

export default {
    name: 'mobileNavigation',
    methods: {
        ...mapMutations(['setHamburgerMenu', 'setToken']),
        doLogOut: function() {
            this.setToken(null)
            this.setHamburgerMenu(false)
            router.push({ path: '/welcome' })
        }
    }, 
    computed: {
        ...mapState(['token'])
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/_app';

.nav_mobile {
  padding: 30px;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  box-sizing: border-box;
  background-color: $backgroundGrey;
  svg {
      position: absolute;
      top: 1.2em;
      left: 1em;
      font-size: 1.5em;
  }
  svg:active {
      color: $standardTextActive;
  }
  ul {
      list-style-type: none;
      font-size: 2em;
      text-align: right;
      margin: 0;
      padding: 0;
      li {
        margin-bottom: 1em;
        font-weight: bold;
        color: #2c3e50;
        display: block;
        text-decoration: none;
        a {
            color: #2c3e50;
            display: block;
            text-decoration: none;
            &.router-link-exact-active {
            color: #42b983;
            text-decoration: underline;
            }
        }
      }
  }
}
</style>
