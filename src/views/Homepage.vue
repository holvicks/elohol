<template>
  <v-container fluid style="padding:0px" >
    <div class="shapes" style="position: relative; padding:100px 50px;">
    <v-col cols="12" md="12" lg="12" >
          <div class="text-center align-center">
            <div class="mt-8">
            <h1 class="mb-5 banner-title font-weight-bold  text-md-h2 text-sm-h3 text-lg-h2 text-white">
              Download our App Today
            </h1>
            <h3 class="banner-subtitle white--text font-weight-regular text-white">
              Responsive app for all kind of purpose
            </h3>
          </div>

          <!-- images for google app and apple app to download from playstore-->
          <div class="head-img mt-10 mb-5">
            <div class="img-1" >
              <v-img  fluid class="pl-2"
         src="../assets/images/google.jpg" >
        </v-img>
            </div>

            <div class="img-1">
              <v-img  fluid class="pl-2"
         src="../assets/images/apple.jpg" >
        </v-img>
            </div>
          </div>

          </div>
        </v-col>
    


<v-row justify="center" class="d-flex align-center justify-center">

  <v-img cols="12"  fluid class="styImg d-flex "
  src="../assets/showcase-hero.png"  
></v-img>
    </v-row>

  </div>
  </v-container>


<v-container class="pa-5 mt-5">
  <Swipercomp />
</v-container>

<v-container class="pa-5 mt-5">
  <Animatedcircle />
</v-container>

<v-container>
  <div class="text-h5 text-lg-h3  text-center py-5 font-weight-bold text-subColor textinnovative">
    Innovative Ideas for Apps
  </div>
<!-- Innovative Ideas for App1-->
<Innovative />
  <!-- Innovative Ideas for App2-->
</v-container>

<v-container fluid  >
  <v-row justify="center" align="center">
    <v-col  cols="12" sm="7" md="7" lg="5">
      <v-img aspect-ratio="3/4"
      src="../assets/img-section1.png"></v-img>
    </v-col>
<v-spacer class="hidden-md-and-down"></v-spacer>
    <v-col  cols="12" sm="12" md="12" lg="6">
      <div class="text-h5 text-lg-h4 py-5 text-subColor textinnovative mt-10">
        Download Now for Free
     </div>

     <p class="text-subtextColor text-h6">More than 35 social platforms are integrated into the app. <br /> Cross-platform sharing & displaying followers and likes are easy <br /> and convenient with just a few clicks.</p>

     <v-btn flat class="mt-10 customBtn text-white" height="50"
          min-width="170">
      <v-icon icon="mdi-play"></v-icon>Intro & Demo Video
     </v-btn>

     <h3 class="mt-8 text-h6 text-subColor mb-10">What is next in Erosol <span class="text-success"> Learn more </span></h3>

    </v-col>
  </v-row>
</v-container>


<v-container class="mt-10" fluid style="padding: 0px;">
  <div class="shapes2 text-center align-center" style="position: relative;padding:100px 90px;">
    

  <h1 class="text-subColor">The step 3 plan</h1>
    

  </div>
</v-container>



<!-- <Animatedcircle2 style=" top:-50%; "/> -->
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import Animatedcircle from '../components/Animatedcircle.vue'
import Animatedcircle2 from '../components/Animatedcircle2.vue'
import Innovative from '../components/Innovative.vue'
import Swipercomp from '../components/Swipercomp.vue'

export default {
  name: "Homepage",
  components: { Innovative, Swipercomp, Animatedcircle, Animatedcircle2},

  setup () {
    //
  }
}
</script>


<style>
.shapes {

      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(to right, #9c7af2 0%, #7e6eed 150%);
      border-radius: 0% 0% 50% 50% / 0% 0% 30% 30%;
      width: 150%; 
}

@media screen and (min-width: 720px) {
  .img-1  {
    width:200px;
    display:inline-block;
  }
}


@media screen and (min-width: 480px) {
  .styImg {
    max-width: 70%;
  }
}

@media screen and (min-width: 400px) {
  .styImg {
    max-width: 70%;
  }
}
@media screen and (min-width: 720px) {
  .styImg {
    max-width: 50%;
  }
}
</style>