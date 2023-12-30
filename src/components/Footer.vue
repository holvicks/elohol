<template >
<v-container fluid class="footerColor py-10 text-white text-center" >
<div class="text-h4 text-lg-h4 text-md-h4 text-sm-h4  mt-5">
    App is available for free <br />
    on Google Play & App Store
</div>
<p class="text-h6 mt-3 text-md-h5 text-lg-h6">We’ll help you achieve your marketing & business goals</p>
          <!-- images for google app and apple app to download from playstore-->
          <div class="foot-imgGroup mt-10 mb-5 justify-center">
            <div class="footImg" >
              <v-img fluid class="pl-2"
         src="../assets/images/google.jpg" >
        </v-img>
            </div>

            <div class="footImg">
              <v-img fluid class="pl-2"
         src="../assets/images/apple.jpg" >
        </v-img>
    </div>
          </div>

    <v-list v-for="(list, index) in lists" :class="{ 'inlineList': inlineList }" class="text-white" router :to= "inlineList.route">
      <p :class="{ 'inlineList': inlineList, 'hovered': hoveredIndex === index }" @mouseover="setHovered(index)" @mouseleave="setHovered(null)">{{ list.text }}</p>
    </v-list>
 

<div class="mt-3">
<v-list v-for="(newlist, index) in newlists" :class="{'newInlineList':newInlineList}" class="text-white">
<p :class="{'newInlineList':newInlineList, 'themeHover':  shouldApplyHover(index)}" @mouseover="onHover(index)" @mouseleave="onHover(null)">{{ newlist.text }} </p>
<v-icon icon="mdi-dashboard" style="color:#DC3545" >{{ newlist.icon }}</v-icon>
</v-list>
</div>

</v-container>

</template>

<script>

import { ref } from 'vue';
export default{
    name:"Footer",
    setup() {

        const lists = ref([
            {text:"FACEBOOK - "},
            {text:"TWITTER - "},
            {text:'INSTAGRAM - ', route:'www.instagram.com'},
            {text:"DRIBBLE - "},
            {text:"PIN INTEREST - "}
        ]);

        const newlists= ref([
          {text:'© 2023 Elohol Made with  by', icon: 'mdi-heart'},
          {text:' holvicks'},
          {text:' |'},
          {text:' 0123456789'},
          {text:' |'},
          {text:' demo@example.com'},
        ])

    const inlineList = ref(true);
    const newInlineList= ref(true);
    const hoveredIndex = ref(null);
    const onHoverIndex = ref(null);

    const onHover = (index) => {
      onHoverIndex.value= index
    }

    function setHovered(index) {
      hoveredIndex.value = index;
    }

    const shouldApplyHover=(index)=> {
      return onHoverIndex.value  === index && (index === 3 || index === 5);
    }
    return { lists, inlineList, hoveredIndex, setHovered, newlists, onHover, newInlineList, onHoverIndex, shouldApplyHover };
  },
}
</script>

<style>

@media screen and (max-width: 480px) {
  .foot-imgGroup {
    display: block;
  }

  .footImg{
    display:block;
}
}

.foot-imgGroup{
display: flex;
}

.footImg{
    box-sizing: border-box;
    width:170px;
    border-radius: 10px;
    padding:0;
    margin:0;
    overflow-x: hidden;
}

.inlineList {
    display:inline;
    background: none;
    color:#ccc;
}

.inlineList:hover{
    color:#fff;
    cursor:pointer;
}

.hovered {
  border-bottom: 2px solid #38CB89; /* Specify the color for the border */
}

.themeHover {
  position: relative;
}

.themeHover::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px; /* Height of the border-bottom */
  background-color: #fff;
  transition: width 0.3s ease-in-out; /* Transition for the width property */
}

.themeHover:hover::before {
  width: 100%; /* Extend the width on hover */
}

.newInlineList{
  display:inline;
  background:none;
  cursor:pointer;
}
</style>