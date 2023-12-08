<template>
  <div class="wrapper">
    <div class="large-circle">
      <div class="small-circle">
        <p>01</p>
      </div>
    </div>
    <div class="floating-circle-2"></div>
    <div class="floating-circle-1"></div>
  </div>
</template>

<script>
export default {
  name: 'Animatedcircle2',
  setup() {}
};
</script>

<style scoped>
.wrapper {
  width: 75%;
  height: 100%;
  margin-inline: auto;
  display: grid;
  place-items: center;
}

.large-circle {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 3px solid #6A66E9;
  display: grid;
  place-items: center;
  border-left: 3px solid #DDDDDD;
  position: relative; 
}

.small-circle {
  height: 180px;
  width: 180px;
  background: linear-gradient(#9f82ff, #5e5acc);
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

.floating-circle-1 {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: linear-gradient(#9f82ff, #5e5acc);
  position: absolute;
  right: 42%;
  animation: floater 2s ease-in-out 0.5s alternate infinite;
}

.floating-circle-2 {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: linear-gradient(#9f82ff, #5e5acc);
  position: absolute;
 
  left: 44%;
  animation: floatersec 2s ease-in-out 0.8s alternate infinite;
  z-index: 1000;
}

@keyframes floater {
  to {
    top: 44%;
  }
  from {
    top: 52%;
  }
}



@keyframes floatersec {
  from {
    top: 52%;
  }
  to {
    top: 54%;
  }
}

@media (max-width: 768px) {
  .large-circle {
    height: 150px;
    width: 150px;
  }

  .small-circle {
    height: 130px;
    width: 130px;
  }

  .floating-circle-1 {
    top: 30%;
    right: 30%;
  }

  .floating-circle-2 {
    bottom: 60%;
    left: 28%;
  }
}

@media (max-width: 480px) {
  .large-circle {
    height: 100px;
    width: 100px;
  }

  .small-circle {
    height: 80px;
    width: 80px;
  }

  .floating-circle-1 {
    top: 20%;
    right: 5%;
  }

  .floating-circle-2 {
    bottom: 50%;
    left: 15%;
  }
}
</style>
