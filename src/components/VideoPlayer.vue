<template>
  <div>
    <video ref="myPlayer" class="video-js vjs-default-skin"></video>
  </div>
</template>

<script>
import videojs from "video.js";
import 'video.js/dist/video-js.css'; // 引入 Video.js 样式文件
import VueVideoPlayer from 'vue-video-player'; // 引入 Vue 视频播放器插件

export default {
  name: "VideoPlayer",
  components: {
    VueVideoPlayer
  },
  mounted() {
    // 创建 Video.js 播放器实例
    this.player = videojs(
        this.$refs.myPlayer,
        {
          autoplay: false, // 自动播放
          controls: true, // 显示控制条
          sources: [{
            src: 'https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/video/video-2.mp4', // 视频地址
            type: 'video/mp4' // 视频格式
          }]
        },
        function onPlayerReady() { // 回调函数，当播放器准备好时调用
          console.log('Player is ready');
          this.play(); // 播放视频
        }
    );
  },
  beforeDestroy() { // 组件销毁时销毁播放器
    if (this.player) {
      this.player.dispose();
    }
  }
  // props: {
  //   video_url: {
  //     type: String,
  //     default() {
  //       return ''
  //     }
  //   },
  //   autoPlay: {
  //     type: Boolean,
  //     default() {
  //       return false;
  //     }
  //   },
  //   preload:{
  //     type:String,
  //
  //   }
  // }
}
</script>

<style scoped>

</style>