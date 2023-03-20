<template>
  <div class="header">
    <div class="top_nav">
      <div class="warp_container">
        <div class="log">
          <div class="img">
            <img src="../../assets/images/logo.png" alt="" />
          </div>
          <div class="text">
            <router-link to="/">专注于Web3.0生态教育</router-link>
          </div>
        </div>
        <div class="nav_box">
          <div @click="navHandleClick('path')" class="nav_box-item">关于火炼</div>
          <div @click="navHandleClick('path')" class="nav_box-item">讲师风采</div>
          <div @click="navHandleClick('path')" class="nav_box-item">VIP网校</div>
          <div @click="navHandleClick('path')" class="nav_box-item">技术文章</div>
          <div @click="navHandleClick('path')" class="nav_box-item">合作加盟</div>
        </div>
      </div>
    </div>
    <div class="index_swiper">
      <swiper class="swiper_box" :slides-per-view="swiperConfig.slidesPerView" :space-between="0"
        :navigation="swiperConfig.navigation" :pagination="swiperConfig.pagination" :modules="swiperConfig.modules"
        :autoplay="swiperConfig.autoplay" @swiper="onSwiper" @slideChange="onSlideChange" :loop="true">
        <swiper-slide><img src="../../assets/images/banner1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/images/banner2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/images/banner3.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/images/banner4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/images/banner5.jpg" alt=""></swiper-slide>
      </swiper>
    </div>
    <div class="nav_bar">
      <div class="warp_container">
        <div class="nav_bar_head">
          <span>精</span>
          <span>品</span>
          <span>课</span>
          <span>程</span>
        </div>
        <div class="nav_bar_box">
          <div class="nav_bar_box_item">以太坊工程师</div>
          <div class="nav_bar_box_item">区块链前端工程师</div>
          <div class="nav_bar_box_item">区块链前端工程师</div>
          <div class="nav_bar_box_item">区块链前端工程师</div>
          <div class="nav_bar_box_item">区块链前端工程师</div>
          <div class="nav_bar_box_item">区块链前端工程师</div>
          <div class="nav_bar_box_item">区块链前端工程师</div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  name: "Index",
  data() {
    return {
      swiperConfig: {
        modules: [
          Pagination, Navigation, Autoplay
        ],
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        navigation: true,
        pagination: true,
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: true

      },
      navbarList: [
        { title: '以太坊工程师', submenu: [{ title: '学科介绍', icon: 'a.png' }], mainicon: "" },
        { title: '区块链Go语言工程师', submenu: [{ title: '学科介绍', icon: 'a.png' }], mainicon: "" },
        { title: '区块链前端工程师', submenu: [{ title: '学科介绍', icon: 'a.png' }], mainicon: "" },
        { title: 'Rust区块链工程师', submenu: [{ title: '学科介绍', icon: 'a.png' }], mainicon: "" },
        { title: '区块链UI设计师', submenu: [{ title: '学科介绍', icon: 'a.png' }], mainicon: "" },
        { title: '区块链测试工程师', submenu: [{ title: '学科介绍', icon: 'a.png' }], mainicon: "" },
        { title: '区块链运营师', submenu: [{ title: '学科介绍', icon: 'a.png' }], mainicon: "" },
      ]
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    //初始化swiper
    initSwiper() { },
    onSwiper() { },
    onSlideChange() { },
    //nav跳转
    navHandleClick(path) {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.router-link-active {
  text-decoration: none;
  color: white;
}

a {
  text-decoration: none;
  color: white;
}

.header {
  height: 600px;
  position: relative;
  width: 100%;
  overflow: hidden;

  .top_nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;

    .warp_container {
      color: #fff;
      font-size: 16px;
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: space-between;
      justify-items: center;
      justify-content: space-between;

      .log {
        width: 300px;
        display: flex;
        align-items: center;

        .img {
          height: 38px;
          width: 110px;
          overflow: hidden;

          img {
            width: 258px;
          }
        }

        .text {
          margin-left: 10px;
          font-size: 15px;
        }
      }

      .nav_box {
        display: flex;

        .nav_box-item {
          padding: 0 35px;
          cursor: pointer;
        }
      }
    }
  }

  .index_swiper {
    .swiper_box {
      height: 100%;

      .nav_box-item {
        width: 100%;
      }
    }
  }

  .nav_bar {
    border: 1px solid pink;

    .warp_container {
      position: absolute;
      z-index: 3;
      top: 80px;
      left: 50%;
      margin-left: -600px;

      .nav_bar_head {
        position: absolute;
        top: 14px;
        left: -36px;
        width: 36px;
        height: 103px;
        border-radius: 15px 0 0 15px;
        background: #F56D2C;
        font-size: 14px;
        line-height: 14px;
        font-family: 'Courier New', Courier, monospace;
        padding: 7px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        justify-items:center;
        align-content: center;
        align-items: center;
        flex-wrap:wrap;
        span {
          width: 100%;
          text-align: center;
          color: #fff;
          font-weight:bold;
        }
      }

      .nav_bar_box {
        height: 500px;
        width: 504px;
        border-radius: 15px;
        background-color: rgba(0, 0, 0, .5);
      }
    }
  }
}
</style>