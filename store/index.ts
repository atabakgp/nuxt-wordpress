
import { ISliderItem, ISliderMedia } from "@/interfaces/slider";

export const usePiniaStore = defineStore('piniaStore', () => {
  const sliderItems = ref<ISliderItem[]>();

  function setSliderItems(data: ISliderItem[]) {
    data.forEach((item: any)=> {
      item.media = {}
    })
    sliderItems.value = data;
  }

  function setSliderMedia(media: ISliderMedia[]) {
    media.forEach((mediaItem: ISliderMedia) => {
      const slideItem = sliderItems.value?.find((item: ISliderItem) => {
        return item.featured_media == mediaItem.id
      });
      if (slideItem) {
        slideItem.media = mediaItem
      }

    })

  }

  return { setSliderItems, setSliderMedia, sliderItems }
})