<template>
  <div id="app">
    <Navigation />
    <main>
      <Loader v-if='loading' />
      <Error v-if="error" />
      <router-view/>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import Error from './components/Error'

export default {
  name: 'App',
  computed: {
    ...mapState(['loading', 'error'])
  },
  components: {
    Navigation,
    Loader,
    Error
  }
}
</script>


<style lang="scss">
@import './styles/_app';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $backgroundGrey;
  text-align: center;
  color: $standardText;
}

main {
  margin-top: 5em;
}
</style>
