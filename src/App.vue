<template>
  <v-app style="transition: all .9s;">
    <Navbar />
    <v-content>
      <Homepage />
    </v-content>
    <Footer />
  </v-app>
</template>


<script>
import Navbar from './components/Navbar.vue'
import Homepage from './views/Homepage.vue'
import  Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Navbar , Homepage, Footer},
  data: () => ({
    //
  }),
}
</script>
