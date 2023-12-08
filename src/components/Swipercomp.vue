<template>
  <swiper
    :slidesPerView="5"
    :spaceBetween="30"
    :freeMode="true"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 5,
        spaceBetween: 50,
      }
    }"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide
    @mouseover="handleMouseOver"
  @mouseleave="handleMouseLeave"
    v-for="(award, index) in awards" :key="index" class="d-flex wrap"  :data-index="index">
      <v-img
        :src="hoveredIndex === index ? award.src : award.hoverSrc"
        :width="award.width"
        :height="award.height"
      ></v-img>
    </swiper-slide>
  </swiper>
</template>



<script>
import { ref, watch, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper/modules';

export default {
  name: 'Swipercomp',
components: { Swiper, SwiperSlide},

  setup() {
    // Define reactive variables using ref
    const awards = ref([
      { src: require('../assets/images/tree.png'), hoverSrc: require('../assets/images/tree-dark.png'), width: 70, height: 70 },
      { src: require('../assets/images/nowhere-famous.png'), hoverSrc: require('../assets/images/nowhere-famous-dark.png'), width: 70, height: 70 },
      { src: require('../assets/images/eagle-face.png'), hoverSrc: require('../assets/images/eagle-face-dark.png'), width: 70, height: 70 },
      { src: require('../assets/images/eagle-nest.png'), hoverSrc: require('../assets/images/eagle-nest-dark.png'), width: 70, height: 70 },
      { src: require('../assets/images/black-lupo.png'), hoverSrc: require('../assets/images/black-lupo-dark.png'), width: 70, height: 70 },
      { src: require('../assets/images/northface.png'), hoverSrc: require('../assets/images/northface-dark.png'), width: 70, height: 70 },
    ]);

    const hoveredIndex = ref(-1);

    // Event handler methods
    const handleMouseOver = (event) => {
      hoveredIndex.value = parseInt(event.currentTarget.dataset.index);
    };

    const handleMouseLeave = () => {
      hoveredIndex.value = -1;
    };

    // Set up Swiper modules
    const modules = ref([FreeMode, Pagination]);
    // Watch for changes in hoveredIndex
    watch(hoveredIndex, (newVal, oldVal) => {
      console.log('hoveredIndex changed:', newVal);
    });

    // Log a message when the component is mounted
    onMounted(() => {
      console.log('Homepage component is mounted');
    });

    return {
      awards,
      hoveredIndex,
      handleMouseOver,
      handleMouseLeave,
      modules,
    };
  },
};

</script>