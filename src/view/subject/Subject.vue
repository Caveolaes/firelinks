<template>
  <div class="subject">
    <div class="warp_container">
        <SwiperVideo />
    </div>
  </div>
</template>
<script>
import SwiperVideo from '@/components/SwiperVideo.vue'
export default {
  name: "Subject",
  props: ["id"],
  components:{SwiperVideo}
};
</script>
<style lang="scss" scoped>
</style>