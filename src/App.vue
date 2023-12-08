<template>
  <v-app>
    <Navbar />
    <v-content>
      <Homepage />
    </v-content>
  </v-app>
</template>




<script>
import Navbar from './components/Navbar.vue'
import Homepage from './views/Homepage.vue'
export default {
  name: 'App',
  components: { Navbar , Homepage},
  data: () => ({
    //
  }),
}
</script>
