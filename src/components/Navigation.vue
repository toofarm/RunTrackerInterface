<template>
    <div class="nav_wrap">
        <nav
        v-bind:class="{ collapse : smallNav, landing: landingPage }">
            <router-link to="/">
                <font-awesome-icon icon="running" id="logo" />
            </router-link>
            <div
                v-if="!mobile" 
                id="desktop_nav">
                <h1>Simple Run Tracker</h1>
                <router-link to="/dashboard">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
            <div 
                v-else
                id="mobile_nav">
                <span class="sign_up_link">
                    <router-link 
                    v-if="landingPage"
                    to="/sign-up">Sign Up</router-link>
                </span>
                <font-awesome-icon 
                @click="setHamburgerMenu(true)"
                icon="bars" id="hamburger" />
            </div>
        </nav>
        <transition name='slide_in'>
            <mobile-nav
            v-if="hamburgerMenu">
            </mobile-nav>
        </transition>
    </div>
</template>

<script>
import MobileNav from './MobileNav'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Navigation',
  data() {
    return {
        smallNav: false,
        showMobileNav: false,
        landingPage: false
    }
  },
  methods: {
      ...mapMutations(['setHamburgerMenu']),
      handleScroll(e) {
          e.preventDefault()
          if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
              this.smallNav = true
          } else {
              this.smallNav = false
          }
      }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    if (this.$router.history.current.path === '/welcome') this.landingPage = true
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    ...mapState(['hamburgerMenu']),
    mobile: function() {
      return window.innerWidth <= 761
    }
  },
  watch:{
    $route (to){
        if (to.path === '/welcome') this.landingPage = true
        else this.landingPage = false
    }
  }, 
  components: {
      MobileNav
  }
}
</script>


<style lang="scss">
@import '../styles/_app';

nav {
  position: fixed;
  width: 100%;
  top: 0;
  box-sizing: border-box;
  padding: 0.7em;
  display: grid;
  background-color: #fff;
  grid-template-columns: repeat(3, 33.3%);
  font-size: 2em;
  transition: all 0.3s ease-in-out;
  a {
      text-align: left;
      max-height: 34px;
  }
  svg {
    display: inline-block;
  }
  #logo {
    color: $linkGreen;
  }
  #logo:hover {
      cursor: pointer;
  }
  #logo:active {
      color: $linkGreenHover;
  }
  #mobile_nav {
    grid-column: 3 / span 1;
    position: relative;
    #hamburger {
      position: absolute;
      right: 5px;
    }
    #hamburger:hover {
        cursor: pointer;
    }
    #hamburger:active {
        color: #999;
    }
  }
  #desktop_nav {
    display: inline-block;
    h1 {
      display: inline-block;
      margin: 0 1em;
    }
  }
  #mobile_nav {
    display: inline-block;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.collapse {
    font-size: 1.5em;
    padding: 0.5em;
}

// Landing page styles
.landing {
    color: #fff;
    background-color: $linkGreen;
    border-bottom: 2px solid $linkGreen;
    .sign_up_link {
        position: absolute;
        width: 200px;
        right: 2em;
        top: -7px;
        text-align: right;
        a {
            color: white;
            text-decoration: none;
            font-size: 0.7em;
        }
    }
    #logo {
        color: #fff;
    }
}

// Slide in animation
.slide_in-enter-active, .slide_in-leave-active {
  transition: transform .5s;
}
.slide_in-enter, .slide_in-leave-to {
  transform: translateX(100%);
}
</style>
