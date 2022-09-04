<template>
  <div>
    <div class="animal-header__wrapper">
      <div v-if="showLeftBlur" class="left-blur"></div>
      <div v-if="showRightBlur" class="right-blur"></div>
      <swiper
        ref="mySwiper"
        :breakpoints="swiperOptions.breakpoints"
        class="animals-slider"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="animal in animals" :key="animal.id">
          <AnimalCard class="animal-card" :animal="animal" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import AnimalCard from './AnimalCard';
import getData from '../data/api';
import 'swiper/css';

export default {
  name: 'animalsList',
  components: {
    Swiper,
    SwiperSlide,
    AnimalCard,
  },
  data() {
    return {
      swiper: {},
      animals: [],
      swiperOptions: {
        breakpoints: {
          1222: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 60,
          },

          375: {
            slidesPerView: 1.17,
            spaceBetween: 19,
          },
        },
      },
    };
  },
  computed: {
    showLeftBlur() {
      const activeIndex = this.swiper?.activeIndex;
      return activeIndex > 0;
    },
    showRightBlur() {
      const activeIndex = this.swiper?.activeIndex;
      return activeIndex <= this.animals.length - 2;
    },
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },

    async loadData() {
      const data = await getData('animals/rand/5');
      this.animals = data;
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.animals-slider {
  padding: 0 23px 23px 23px;
}
.animal-header__wrapper {
  position: relative;
}
.animal-card + .animal-card {
  margin-left: 17px;
}

.left-blur,
.right-blur {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: 23px;
}

.left-blur {
  left: 0;
  background: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
}

.right-blur {
  right: 0;
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff);
}
</style>
