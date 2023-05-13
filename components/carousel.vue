<template>
  <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]"
  :slides-per-view="1" 
  :loop="true" 
  :effect="'fade'"
  :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }" 
  :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}"
:centered-slides="true"
>
    <SwiperSlide v-for="slide in slideItems" :key="slide.id">
      <img :src="slide.media.source_url" alt="" class="w-full">
      <div class="swiper-slide-title">
        {{ slide.title.rendered }}
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import { usePiniaStore } from "@/store/index";
const store = usePiniaStore();
const slideItems = ref(store.sliderItems)

</script>

<style scoped lang="scss">
.swiper-slide {
  img {
    height: 90vh;
    object-fit: cover;
  }
  .swiper-slide-title {
    position: absolute;
    bottom: 32px;
    left: 32px;
    z-index: 100;
    color: #fff;
    font-size: 40px;
    background-color: rgba($color: #000000, $alpha: 0.5);
    padding: 16px;
    border-radius: 8px;
  }
}
</style>
  