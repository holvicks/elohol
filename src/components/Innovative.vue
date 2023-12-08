<template>
<v-row  class=" justify-center mt-2 ">
  <v-col cols="12" md="6" lg="6" sm="10" class="pa-10 custom-hover">
    <v-row justify-md="center" align-md="center">
      <v-col cols="3" lg="3" md="3" sm="2">
        <v-responsive aspect-ratio="1">
          <div class="rounded-circle custom-circle">
            <v-img src="../assets/connect-ideas.png"></v-img>
          </div>
        </v-responsive>
      </v-col>

      <v-col cols="9" lg="9" md="7" sm="10">
        <h4 class="py-2 text-subheadColor"> Connect ideas </h4> 
        <p class="text-subtextColor">Consider this app a platform for connecting people from everywhere based on their preferences.</p>
      </v-col>
    </v-row>
  </v-col>
 

    <v-col cols="12" md="6" lg="6" sm="10" class="pa-10 custom-hover">
      <v-row  justify-md="center" align-md="center">
        <v-col cols="3" lg="3" md="3" sm="2">
          <v-responsive aspect-ratio="1">
            <div class="rounded-circle  custom-circle">
              <v-img src="../assets/make-schedules.png"></v-img>
            </div>
          </v-responsive>
        </v-col>

        <v-col cols="9" lg="9" md="7" sm="10">
         <h4 class="py-2 text-subheadColor"> Connect ideas </h4> 
          <p class="text-subtextColor">Consider this app a platform for connecting people from everywhere based on their preferences.</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <v-row  class=" justify-center">
    <v-col cols="12" md="6" lg="6" sm="10" class="pa-10 custom-hover">
      <v-row  justify-md="center" align-md="center">
        <v-col cols="3" lg="3" md="3" sm="2">
          <v-responsive aspect-ratio="1">
            <div class="rounded-circle  custom-circle">
              <v-img src="../assets/manage-time.png"></v-img>
            </div>
          </v-responsive>
        </v-col>

        <v-col cols="9" lg="9" md="7" sm="10">
         <h4 class="py-2 text-subheadColor"> Connect ideas </h4> 
          <p class="text-subtextColor">Consider this app a platform for connecting people from everywhere based on their preferences.</p>
        </v-col>
      </v-row>
    </v-col>


    <v-col cols="12" md="6" lg="6" sm="10" class="pa-10 custom-hover">
      <v-row  justify-md="center" align-md="center">
        <v-col cols="3" lg="3" md="3" sm="2">
          <v-responsive aspect-ratio="1">
            <div class="rounded-circle  custom-circle">
              <v-img src="../assets/working-mobile.png"></v-img>
            </div>
          </v-responsive>
        </v-col>

        <v-col cols="9" lg="9" md="7" sm="10">
         <h4 class="py-2 text-subheadColor"> Connect ideas </h4> 
          <p class="text-subtextColor">Consider this app a platform for connecting people from everywhere based on their preferences.</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default{
  name: 'Innovative',
  data:() => ({
    
  }),
}
</script>

<style >

.custom-circle {
  border: 2px solid #f5f4f4;
  overflow: hidden; 
  border-radius: 50%; 
  padding:15px;
}

@media screen  and (min-width: 720px){
  .custom-circle {
  overflow: hidden; 
  border-radius: 50%; 
  padding:20px
}
}

@media screen  and (min-width: 960px){
  .custom-circle {
  overflow: hidden; 
  border-radius: 50%; 
  padding:15px
}
}
@media screen  and (min-width: 1299px){
  .custom-circle {
  overflow: hidden; /* Ensure the image stays within the circle */
  border-radius: 50%; /* Make it a circle */
  padding:10px
}
}

@media screen  and (min-width: 1300px){
  .custom-circle {
  overflow: hidden; /* Ensure the image stays within the circle */
  border-radius: 50%; /* Make it a circle */
  padding:27px
}
}



.custom-hover {
  transition: 0.5s ease-in-out;
}

.custom-hover:hover {
  box-shadow: 0px 0px 50px rgba(199, 197, 197, 0.3);
 
  transform: translateY(-0.2cm);
}

@keyframes customframe {
  from {
    bottom: 90%;
  }
  to {
    top: 100%;
  }
}
</style>
