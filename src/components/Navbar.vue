<template>
  <nav id="">
    <!-- Vuetify Application Bar -->
    <v-app-bar
      app
      class="navbar-light navbar-res  py-5 transparent"
      :color="navbarColor"
      light
      :elevation="elevation"
      :class="{'navbarLight':isScrolled}"
       
    >
      <!-- Title in the Toolbar -->
      <v-toolbar-title :style="{ color: textColor }" class="d-flex">
        <span>Erosol</span>
      </v-toolbar-title>

      <!-- Spacer to push content to the right -->
      <v-spacer></v-spacer>

      <!-- Navigation Links for Larger Screens -->
      <div class="hidden-sm-and-down transparent">
        <v-list class="d-flex align-center transparent" :style="{ color: textColor }" >
          <v-list-item link v-for="(link, index) in links" :key="index" :to="{ path: link.path }" v-scroll-to="`#${link.route}`" :class="{customlink:link.title}">
  <v-list-item-title>{{ link.title }}</v-list-item-title>
</v-list-item>
        </v-list>
      </div>

      <v-spacer></v-spacer>
      <!-- Button for Larger Screens -->
      <v-btn flat class="bg-white navBtn hidden-md-and-down justify-center align-center" style="color:#5945e6 !important;" height="50"  
          min-width="170" :class="{'scrolled-border': isScrolled}">
      <b>Hire us Now</b>
     </v-btn>
      <!-- <v-btn  flat class="bg-white navBtn hidden-sm-and-down  font-weight-bold justify-center align-center pa-5" style="color:#5945e6 !important;">Hire us now</v-btn> -->
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
      <v-list  class="mt-10">
          <v-list-item link v-for="(link, index) in links" :key="index" :to="{ path: link.path }" v-scroll-to="`#${link.route}`">
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
        { title: 'Home', path:'/', route: 'home' },
        { title: 'About-us', path:'/about-us', route: 'about-us'},
        { title: 'Service', path:'/service', route: 'service' },
        { title: 'Contact', path:'/contact', route: 'contact' },
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
      this.isScrolled = window.scrollY > 100; // Set to true if the user has scrolled more than 5 pixels
      this.elevation = this.isScrolled ? 10 : 0;
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



.navbarLight {
  transition: all .9s;
  background-color: #FFFFFF !important;
}

@media screen and (min-width:720px){
  .navbar-res{
    padding:0 98px !important;  
}
}


.navbar-res{
  padding:0 10px;
}

.scrolled-border{
  border: 2px solid #5945e6 !important;
}
.v-app-bar {
  transition: opacity 0.5s ease-in-out;
}
.customlink:hover {
  border-bottom: 2px solid #FFFFFF;
  transition:all ease-in-out .3s; 
}
.customlink::after{
  content: '';
  position: absolute;
  width: 0px;
  height: 2px;
  left: 50%;
  bottom:0;
  background-color: white;
  transition: all ease-in-out .5s;
}
.customlink:hover::after{
  width: 100%;
  left: 0;
}
</style>
