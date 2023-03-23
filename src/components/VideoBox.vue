<template>
  <video-player
    :src="src"
    :poster="poster"
    controls
    playbackRates="[1,2,3]"
    :loop="true"
    :volume="0.6"
    :playback-rates="[0.7, 1.0, 1.5, 2.0]"
  />
</template>
  
  <script>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
export default {
  name: "VideoBox",
  props: {
    src: {
      type: String,
      default() {
        return "";
      },
    },
    poster: {
      type: String,
      default() {
        return "";
      },
    },
  },
  mounted(){
    if(this.src==''){
        console.log('视频源为空');
    }
  },
  components: {
    VideoPlayer,
  },
  data() {
    return {};
  },
  methods: {
    // mounted() {},
    // ready() {},
    // play() {},
    // pause() {},
    // ended() {},
    // seeking() {},
    // pause() {},
  },
};
</script>