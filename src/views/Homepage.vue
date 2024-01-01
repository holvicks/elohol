<template>
  <v-container fluid style="padding:0px" data-aos="fade-up">
    <div class="shapes" style="position: relative; padding:100px 50px;">
    <v-col cols="12" md="12" lg="12"  >
          <div class="text-center align-center">
            <div class="mt-8 px-10">
            <h1 class="mb-5 banner-title font-weight-bold  text-h3 text-md-h2 text-sm-h3 text-lg-h2 text-white">
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


<v-container class="pa-5 mt-5" data-aos="fade-up">
  <Swipercomp />
</v-container>

<v-container class="pa-5 mt-5" data-aos="fade-up" >
  <Animatedcircle />
</v-container>

<v-container data-aos="fade-up" id="about-us">
  <div class="text-h5 text-lg-h3  text-center py-5 font-weight-bold text-subColor textinnovative" >
    Innovative Ideas for Apps
  </div>
<!-- Innovative Ideas for App1-->
<Innovative />
  <!-- Innovative Ideas for App2-->
</v-container>


<v-container fluid data-aos="fade-up" >
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



<v-container class="mt-10" fluid style="padding: 0px;" data-aos="fade-up" id="service">
  <div style="position:relative; top:75px; z-index: 1000;">
  <Animatedcircle />
</div>
  <div class="shapes2 text-center align-center" style="padding:100px 90px; ">  
    <v-container  >
  <h1 class="text-subColor text-center mt-10">The step 3 plan</h1>
  <v-row class="mt-10">
    <v-col cols="12" md="4" lg="4" align="center" justify="center" class="moreinfo">
      <div class="process-box d-flex justify-center align-center text-primary text-lg-h5">
        <v-icon icon="mdi-fire" class="customicon">
        </v-icon>
      </div>
        <h3 class="text-subheadColor mt-10"> Define your Ideas</h3>
        <p>Share ideas of how you would like your app to perform to achieve goals.</p>
    </v-col>

    <v-col cols="12" md="4" lg="4" align="center" justify="center text-lg-h5" class="moreinfo">
      <div class="process-box d-flex justify-center align-center text-primary text-lg-h5">
        <v-icon icon="mdi-account-group" class="customicon">
        </v-icon>
      </div>
      <h3 class="text-subheadColor mt-10"> Work on designs</h3>
        <p>After getting your brief, our experts work on crafting the final designs.</p>
    </v-col>

    <v-col cols="12" md="4" lg="4" align="center" justify="center text-lg-h5" class="moreinfo">
      <div class="process-box d-flex justify-center align-center text-primary text-lg-h5">
        <v-icon icon="mdi-trending-up" class="customicon">
        </v-icon>
      </div>
      <h3 class="text-subheadColor mt-10"> Coding and Review</h3>
        <p>The final product is obtained from meticulous coding and review..</p>
    </v-col>
  </v-row>


  <v-row class="text-left" >
    <v-col cols="12" sm="6" md="5" lg="5">
      <v-img rounded="lg" fluid src="../assets/img-phone.png"
      alt="app display"  :width="600" :height="500" :aspect-ratio="1" >
      </v-img>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="4" class="mt-10 custom-login">
      <p class="mt-10 login-screen"> 01 – LOGIN SCREEN </p>
      <h3 class="mt-5 text-h5 text-lg-h4 text-subColor textinnovative">Everything starts with the login screen</h3>
      <p class="mt-5">The design of a login screen is intended to give users a quick and secure way to access their personal account. Bot detection algorithm is available for selection.</p>
    
      <v-btn flat class="mt-10 customBtn text-white" height="50"
          min-width="170">
      Download now
     </v-btn>
    </v-col>
  </v-row>

  <v-row class="justify-center align-center" >

    <!--==============1st image and column =============-->
    <v-col cols="12" lg="5" md="5" sm="6 " class="d-lg-none d-md-none d-sm-none">
      <v-img rounded="lg" fluid src="../assets/img-phone2.png"
      alt="app display"  
      :width="600" 
      :height="500" 
      :aspect-ratio="16/9"
      class="custom-image-margin" >
      </v-img>
    </v-col>
    <v-col cols="12" lg="4" md="6" sm="12" class="d-sm-none d-block d-md-block d-lg-block text-left justify-left custom-ad">
      <p class=" login-screen"> 01 – COMMUNICATE WITH FRIENDS </p>
      <h3 class="mt-5 text-h5 text-lg-h4 text-subColor textinnovative">A Collection of Advanced features</h3>
      <v-list dense style="background:none;">
        <v-list-item v-for="item in items" :key="item.text" class="v-list-items">
          <v-icon class="text-success">{{ item.icon }}</v-icon>
          <span class="ml-4 text-sm-p1 ad-feature">{{ item.text }}</span>
        </v-list-item>
      </v-list>
    </v-col>

    <v-col cols="12" lg="5" md="5" sm="12" class="d-none d-sm-block d-md-block d-lg-block justify-center">
      <v-img rounded="lg" fluid src="../assets/img-phone2.png"
      alt="app display"  :width="600" :height="550" :aspect-ratio="16/9"
       style="margin:0 auto;">
      </v-img>
    </v-col>

    <v-col cols="12" lg="4" md="6" sm="12" class="d-none d-sm-block d-md-none d-lg-none ml-10 pl-10 text-left custom-ad">
      <p class=" login-screen"> 01 – COMMUNICATE WITH FRIENDS </p>
      <h3 class="mt-5 text-h5 text-lg-h4 text-subColor textinnovative ">A Collection of Advanced features</h3>
      <v-list dense style="background:none;">
        <v-list-item v-for="item in items" :key="item.text" class="v-list-items">
          <v-icon class="text-success">{{ item.icon }}</v-icon>
          <span class="ml-4 text-sm-p1 ad-feature">{{ item.text }}</span>
        </v-list-item>
      </v-list>
    </v-col>

      <!--==============2nd image and column =============-->

    <v-col cols="12" lg="5" md="5" sm="12" class=" justify-center">
  <v-img rounded="lg" fluid src="../assets/img-phone3.png"
  alt="app display"  class="custom-image"
   style="margin:0 auto;">
  </v-img>
</v-col>
<v-col cols="12" sm="6" md="4" lg="4" class="text-left" >
      <p class="login-screen"> 01 – LOGIN SCREEN </p>
      <h3 class="mt-5 text-h5 text-lg-h4 text-subColor textinnovative">Everything starts with the login screen</h3>
      <p class="mt-5">The design of a login screen is intended to give users a quick and secure way to access their personal account. Bot detection algorithm is available for selection.</p>
    
      <v-btn flat class="mt-10 customBtn text-white" height="50"
          min-width="170">
      Download now
     </v-btn>
    </v-col>
  </v-row>
</v-container>
  </div>

  <div style="position:relative; top:-90px; z-index: 1000;" data-aos="fade-up">
  <Animatedcircle />
</div>
</v-container>

<v-container data-aos="fade-up" id="contact">
<p class="text-subColor text-center text-h4 text-md-h4 text-sm-h4 text-lg-h3"> <b>Subscribe to receive updates</b> </p>
<v-row class="justify-center mt-5" style="margin:0 auto">
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-form>
  <div role="form" id="" aria-label="Add a comment" class="customBtn2">
  <input autocomplete="nickname" autocorrect="on" placeholder="Your name" type="text"/>
</div>
 </v-form>
  </v-col>

  <!--=======second input text form =======-->
  <v-col cols="12" sm="6" md="4" lg="3">
 <v-form>
  <div role="form" id="" aria-label="Add a comment" class="customBtn2">
  <input autocomplete="nickname" autocorrect="on" placeholder="Email" type="text"/>
</div>
 </v-form>
</v-col>

<!--====== Thirdinput text form =======-->
<v-col cols="6" lg="2" md="4" sm="4">
  <v-btn flat class="customBtn text-white " height="50" style="width:100%; text-transform:capitalize;" >
  Subscribe
  </v-btn>
</v-col>

<v-col cols="12" lg="12" class="text-center">
  <h3 class="mt-1 text-h6 text-subColor mb-5">What is next in Erosol <span class="text-success"> Learn more </span></h3>
</v-col>

</v-row>
</v-container>

</template>

<script>
import { ref, watch, onMounted } from 'vue';
import AOS from 'aos'; // Add this import line
import 'aos/dist/aos.css';
import Animatedcircle from '../components/Animatedcircle.vue'
import Animatedcircle2 from '../components/Animatedcircle2.vue'
import Innovative from '../components/Innovative.vue'
import Swipercomp from '../components/Swipercomp.vue'


export default {
  name: "Homepage",
  components: { Innovative, Swipercomp, Animatedcircle, Animatedcircle2},

  setup() {

    const sectionleft = ref(false);
    const sectioncenter = ref(false);
//
    const items = ref([
    {icon:"mdi-check", text:"User-friendly, modern and intuitive"},
    {icon:"mdi-check", text:"Updated mobile design & features"},
    {icon:"mdi-check", text:"Beautiful icons, typography and images"},
    {icon:"mdi-check", text:"Extendable premium customer support"},
    ]);


    onMounted(() => {
      AOS.init(); // Initialize AOS

      // Refresh AOS after updating the DOM
      AOS.refresh();

    })

    return{
      items, sectionleft, sectioncenter
    }
  },

}
</script>


<style>
.shapes {
      transform: translateX(-15%);
      background: linear-gradient(to right, #9c7af2 0%, #7e6eed 150%);
      border-radius: 0% 0% 50% 50% / 0% 0% 30% 30%;
      width: 143%; 
}

.moreinfo p{
  font-size:12.5px;
  width:70%;
  }

  .ad-feature{
    font-size:12px;
  }

  .customBtn2 input[type = "text"] {
    background-color: #EDEDED;
    padding:10px;
    border-radius: 10px;
    width:100%;
    height: 50px;
    font-size:13px;
  }

  .customBtn2 input[type =text]:focus {
    outline:none; 
    border: 3px solid #ccc;
  }

@media screen and (max-width:480px){
  .ad-feature{
    font-size:15px;
  }

  .shapes2 {
    background:linear-gradient(#F8F8F8, #E3E9FF) ;
    transform: translateX(-13%);
    border-radius: 50% 50% 50% 50% / 10% 10% 10% 10%;
    width: 140%;
    position: relative;
    
}

}

    @media screen and (min-width: 480px) {
  .shapes2 {
    background:linear-gradient(#F8F8F8, #E3E9FF) ;
    transform: translateX(-15%);
    border-radius: 50% 50% 50% 50% / 10% 10% 10% 10%;
    width: 140%;
}


  .styImg {
    max-width: 70%;
  }

  .shapes2 > h1{
    font-size:20px;
  }

}

@media screen and (min-width: 400px) {
  .styImg {
    max-width: 70%;
  }
}
@media screen and (min-width: 720px) {
  .img-1  {
    width:200px;
    display:inline-block;
  }

  .styImg {
    max-width: 50%;
  }

  .shapes2 > h1{
    font-size:40px;
  }

  .moreinfo p{
font-size:14.5px;
}
}

@media screen and (min-width: 420px) and (max-width: 599px) {
  .custom-login  {
    margin-left: 20px;
  }

}

@media screen and (min-width: 508px) and (max-width: 599px) {
  .custom-ad  {
    margin-left: 50px;
  }
}

@media screen and (min-width: 722px) and (max-width: 960px) {
  .custom-login p,
  .custom-login h3 {
    width: 60%;
  }

  .custom-ad{
    margin-left: 20px;
  }
}
/* Media query for screens up to 719px */
@media screen and (max-width: 719px) {
  .custom-login p,
  .custom-login h3 {
    width: 80%;
  }
  .custom-ad{
    margin-left: 20px;
  }
}

/* Media query for screens larger than or equal to 720px */
@media screen and (min-width: 961px) {
  .custom-login p,
  .custom-login h3 {
    width: 100%;
  }

  .shapes2 {
    background:linear-gradient(#F8F8F8, #E3E9FF) ;
    transform: translateX(-15%);
    border-radius: 50% 50% 50% 50% / 30% 30% 30% 30%;
    width: 140%;
}
}




</style>