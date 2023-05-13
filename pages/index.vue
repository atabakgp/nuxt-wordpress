<template>
  <div>
    <Header />
    <Carousel/>
  </div>
</template>

<script lang="ts" setup>
import { usePiniaStore } from "@/store/index";
import { ISliderItem } from "@/interfaces/slider"
const store = usePiniaStore();


const { data } = await useWpApi().getSliderItems();

if (data.value) {
  store.setSliderItems(data.value);
}

const sliderItems = ref(store.sliderItems);


function getMediaArray(sliderItems: ISliderItem[]) {
  return new Promise(async (resolve, reject) => {
    try {
      const mediaArray = ref([]);
      for (const item of sliderItems) {
        const { data: mediaItem } = await useWpApi().getSliderMedia(item.featured_media);
        mediaArray.value.push(mediaItem.value);
      }
      resolve(mediaArray);
    } catch (error) {
      reject(error);
    }
  });
}

getMediaArray(sliderItems.value).then((mediaArray)=> {
  store.setSliderMedia(mediaArray.value)
});




</script>

<style lang="scss" scoped></style>