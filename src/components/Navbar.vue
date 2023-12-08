
<template>
  <nav>
    <!-- Vuetify Application Bar -->
    <v-app-bar
      app
      class="navbar-light padi transparent"
      style="padding: 0 98px"
      :color="navbarColor"
      light
      :elevation="elevation"
    >
      <!-- Title in the Toolbar -->
      <v-toolbar-title :style="{ color: textColor }" class="d-flex">
        <span>Erosol</span>
      </v-toolbar-title>

      <!-- Spacer to push content to the right -->
      <v-spacer></v-spacer>

      <!-- Navigation Links for Larger Screens -->
      <div class="hidden-sm-and-down transparent">
        <v-list class="d-flex align-center transparent" :style="{ color: textColor }">
          <v-list-item link v-for="link in links" :key="index" :to="link.route">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>

      <!-- Button for Larger Screens -->
      <v-btn class="bg-white hidden-sm-and-down text-buttonColor" >Hire us now</v-btn>

      <!-- Navigation Icon for Small Screens -->
      <v-app-bar-nav-icon
        prominent
        temporary
        variant="text"
        @click="drawer = !drawer"
        class="hidden-md-and-up "  :style="{ color: textColor }"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Navigation Drawer for Small Screens -->
    <v-navigation-drawer v-model="drawer" :width="400" class="hidden-md-and-up">
      <v-list>
        <v-list-item link v-for="link in links" :key="index" :to="link.route">
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // Controls the state of the navigation drawer
      links: [
        { title: 'Home', route: 'home' },
        { title: 'About-us', route: 'about-us' },
        { title: 'Service', route: 'service' },
        { title: 'Contact', route: 'contact' },
      ],
      elevation: 0, // Initial elevation of the app bar
      isScrolled: false, // To track if the user has scrolled
    };
  },
  computed: {
    // Computes the background color based on scroll
    navbarColor() {
      return this.isScrolled ? 'white' : 'transparent';
    },
    // Computes the text color based on scroll
    textColor() {
      return this.isScrolled ? 'black' : 'white';
    },
  },
  methods: {
    // Handles the scroll event to update the isScrolled property
    handleScroll() {
      this.isScrolled = window.scrollY > 20; // Set to true if the user has scrolled more than 5 pixels
    },
  },
  watch: {
    // Watches changes to the elevation property
    elevation(newVal) {
      this.elevation = newVal;
    },
  },
  mounted() {
    // Attaches the handleScroll method to the window's scroll event when the component is mounted
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Removes the event listener when the component is about to be destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
@import '../assets/styles.css';

.transparent {
  background: transparent !important;
}

.navbar-light {
  color: white !important; /* Set default text color */
}

.navbar-light.scrolled {
  background: white !important;
  color: black; /* Set text color to black when scrolled */
}
</style>
