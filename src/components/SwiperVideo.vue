<template>
  <div class="swiper_video">
    <!-- <VideoBox src="../../public/video-1.mp4" poster="../src/assets/images/course5.png"/> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in items" :key="index">
          <VideoBox
            :src="`../../public/video-${index + 1}.mp4`"
            poster="../src/assets/images/course5.png"
          />
          <!-- <img :src="item.image" alt="" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p> -->
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import VideoBox from "./VideoBox.vue";

import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "SwiperVideo",
  components: { VideoBox },
  data() {
    return {
      items: [
        {
          image: "../src/assets/images/course1.png",
          title: "标题1",
          description: "描述1",
        },
        {
          image: "../src/assets/images/course2.png",
          title: "标题2",
          description: "描述2",
        },
        {
          image: "../src/assets/images/course3.png",
          title: "标题3",
          description: "描述3",
        },
      ],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper_video {
  width: 640px;
  height: 360px;
  overflow: hidden;
  border-radius: 16px;
  .swiper-container {
    width: 640px;
    height: 360px;
  }
}
</style>