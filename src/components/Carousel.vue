<template>
  <div class="wrapper">
    <swiper class="swiper parallax-swiper"
    grabCursor
    navigation
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: this.slider.interval
    }"
    >
      <swiper-slide class="swiper-slide" v-for="item in slider.items" :key="item.id">
        <router-link :to="item.url"><img :src="item.img" alt=""></router-link>
        <p class="swiper-slide__text" v-if="item.text">{{ item.text }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper"
import {Swiper, SwiperSlide} from "swiper/vue"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  name: "Carousel",
  components: {
    Swiper, SwiperSlide
  },
  props: {
    slider: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
  .swiper {
    width: 1200px;
    height: 600px;
  }
  .swiper-slide {
    position: relative
  }
  .swiper-slide a img {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
  }
  .swiper-slide__text {
    position: absolute;
    z-index: 2;
    font-size: 50px;
    left: 50px;
    top: 70%;
    color: #fff;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    transform: translateY(-50%);
  }
</style>