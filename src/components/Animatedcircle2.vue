<template>
  <div class="wrapper">
   <div class="large-circle">
     <div class="small-circle">
       <p>01</p>
     </div>
      
   </div>
    <div class="floating-circle-2">
      </div>
    <div class="floating-circle-1">
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'Animatedcircle2',
    setup() {
    }
  }
  </script>
  
  <style >
  @import '../assets/styles.css';
  
  
  .wrapper {
    width: 75%;
    height: 100%;
    margin-inline: auto;
    display: grid;
    place-items: center;
    position: relative;
    top:50%;
  }
  
  
  .large-circle {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 3px solid #6A66E9;
    display: grid;
    place-items: center;
    
    border-left: 3px solid #DDDDDD;
  }
  
  
  .small-circle {
    height: 180px;
    width: 180px;
    background: linear-gradient(#9f82ff, #5e5acc );
    border-radius: 50%;
    color: white;
    display: grid;
    place-items: center;
  }
  
  .small-circle > p {
    color: white; 
    font-size: 50px;
    font-weight: 500;
  }
  
  .floating-circle-1{
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: linear-gradient(#9f82ff, #5e5acc );
    position: absolute;
    float:right;
    top: 30%;
    right: 0%;
    animation: floater 2s ease-in-out .5s alternate infinite;
  }
  
  .floating-circle-2{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: linear-gradient(#9f82ff, #5e5acc );
    position: absolute;
    bottom: 30%;
    left: 0%;
    animation: floatersec 2s ease-in-out .8s alternate infinite;
    z-index:1000;
  }
  
  @keyframes floater{
    to{  
      top: 50%;
    }
  }
  
  @keyframes floater2{
    to{ 
      bottom: 50%;
    }
  }
  
  
  @keyframes floatersec{
    from{ 
     top:70%;
    }
    to{
      top:60%
    }
  }
  
  @media (min-width:768px){
    .wrapper {
    width: 75%;
    height: 100%;
    margin-inline: auto;
    display: grid;
    place-items: center;
    position: relative;
  }
  
  .large-circle {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 3px solid #6A66E9;
    display: grid;
    place-items: center;
    position: relative;
    border-left: 3px solid #DDDDDD;
  }
  
  .small-circle {
    height: 180px;
    width: 180px;
    background: linear-gradient(#9f82ff, #5e5acc );
    border-radius: 50%;
    color: white;
    display: grid;
    place-items: center;
  }
  
  .small-circle > p {
    color: white; 
    font-size: 50px;
    font-weight: 500;
  }
  
  .floating-circle-1{
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: linear-gradient(#9f82ff, #5e5acc );
    position: absolute;
    top: 30%;
    right: 35%;
    animation: floater 2s ease-in-out .5s alternate infinite  
  }
  
  .floating-circle-2{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: linear-gradient(#9f82ff, #5e5acc );
    position: absolute;
    bottom: 30%;
    left: 39%;
    animation: floatersec 2s ease-in-out .8s alternate infinite;
    z-index:1000 
  }
  @keyframes floater{
    to{  
      top: 50%;
    }
  }
  
  @keyframes floater2{
    to{ 
      bottom: 50%;
    }
  }
  @keyframes floatersec{
    from{ 
     top:70%;
    }
  
    to{
      top:60%
    }
  }
  }
  
  
  @media all and (max-width:480px){
  
    .large-circle {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 3px solid #6A66E9;
    display: grid;
    place-items: center;
    position: relative;
    border-left: 3px solid #DDDDDD;
  }
  
  .small-circle {
    height: 130px;
    width: 130px;
    background: linear-gradient(#9f82ff, #5e5acc );
    border-radius: 50%;
    color: white;
    display: grid;
    place-items: center;
  }
  
  
    .floating-circle-1{
    position: absolute;
    top: 30%;
    right: 10%;
    animation: floater 2s ease-in-out .5s alternate infinite  
  }
  
  .floating-circle-2{
    position: absolute;
    bottom: 60%;
    left: 26%;
    animation: floatersec 2s ease-in-out .8s alternate infinite;
    z-index:1000 
  }
  }
  
  
  
  </style>
  