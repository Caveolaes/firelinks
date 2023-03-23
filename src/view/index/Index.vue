<template>
  <div class="header">
    <div class="top_nav">
      <div class="warp_container">
        <div class="log">
          <div class="img">
            <img src="../../assets/images/logo.png" alt=""/>
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
              :navigation="swiperConfig.navigation" :pagination="swiperConfig.pagination"
              :modules="swiperConfig.modules"
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
          <div class="nav_bar_box_item" v-for="(index, item) in 14" :key="item">
            <div class="text">
              <router-link :to="`/subject/` + index"> 以太坊工程师 -- {{ index }}</router-link>
            </div>
            <el-icon>
              <ArrowRight/>
            </el-icon>
            <div class="nav_bar_box_item-detail">
              <div class="nav_bar_box_item-name">以太坊工程师 -- {{ index }}</div>
              <div class="nav_bar_box_item-main">
                <div class="nav_bar_box_item-main-item">
                  <img src="/src/assets/images/orange1.png" alt="">
                  <div class="text">学科介绍</div>
                </div>
                <div class="nav_bar_box_item-main-item">
                  <img src="/src/assets/images/orange1.png" alt="">
                  <div class="text">学科介绍</div>
                </div>
                <div class="nav_bar_box_item-main-item">
                  <img src="/src/assets/images/orange1.png" alt="">
                  <div class="text">学科介绍</div>
                </div>
                <div class="nav_bar_box_item-main-item">
                  <img src="/src/assets/images/orange1.png" alt="">
                  <div class="text">学科介绍</div>
                </div>
              </div>
              <div class="nav_bar_box_item-icon">
                <img src="/src/assets/images/blue5.png" alt="">
                <div class="text">就业前景</div>
              </div>

            </div>
          </div>


        </div>
      </div>

    </div>
  </div>
  <CourseStandardShow/>
  <NewStandardShow/>
  <BlockchainApplication/>
  <div class="isolation_belt">
    <img src="/src/assets/images/plate.png">
    <div class="text">火链学院——全国区块链教育行业先驱</div>
  </div>
  <div class="course_container">
    <div class="text">
      火链学院主要课程
    </div>
    <div class="course_container_box">
      <courseIntroduction/>
      <courseIntroduction/>
      <courseIntroduction/>
      <courseIntroduction/>
      <courseIntroduction/>
      <courseIntroduction/>
      <courseIntroduction/>
      <courseIntroduction/>
      <courseIntroduction/>
    </div>
  </div>
  <CourseIdea/>
  <div class="teacher_show">
    讲师风采
  </div>
  <AssistStudy/>
  <ProfessionQuestion/>
  <FacilityEnvironment/>
  <IndustryInfluence/>
  <Footer/>
</template>
<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Navigation, Autoplay} from "swiper";
import CourseStandardShow from "@/components/CourseStandardShow.vue"
import NewStandardShow from "@/components/NewStandardShow.vue"
import BlockchainApplication from "@/components/BlockchainApplication.vue";
import courseIntroduction from "@/components/CourseIntroduction.vue";
import CourseIdea from "@/components/CourseIdea.vue";
import AssistStudy from "@/components/AssistStudy.vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProfessionQuestion from "@/components/ProfessionQuestion.vue";
import FacilityEnvironment from "@/components/FacilityEnvironment.vue";
import IndustryInfluence from "@/components/IndustryInfluence.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Index",
  data() {
    return {
      swiperConfig: {
        modules: [
          Pagination, Navigation, Autoplay
        ],
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        navigation: true,
        pagination: true,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true

      },
      navbarList: [
        {title: '以太坊工程师', submenu: [{title: '学科介绍', icon: 'a.png'}], mainicon: ""},
        {title: '区块链Go语言工程师', submenu: [{title: '学科介绍', icon: 'a.png'}], mainicon: ""},
        {title: '区块链前端工程师', submenu: [{title: '学科介绍', icon: 'a.png'}], mainicon: ""},
        {title: 'Rust区块链工程师', submenu: [{title: '学科介绍', icon: 'a.png'}], mainicon: ""},
        {title: '区块链UI设计师', submenu: [{title: '学科介绍', icon: 'a.png'}], mainicon: ""},
        {title: '区块链测试工程师', submenu: [{title: '学科介绍', icon: 'a.png'}], mainicon: ""},
        {title: '区块链运营师', submenu: [{title: '学科介绍', icon: 'a.png'}], mainicon: ""},
      ]
    };
  },
  components: {
    Footer,
    IndustryInfluence,
    FacilityEnvironment,
    ProfessionQuestion,
    AssistStudy,
    Swiper,
    SwiperSlide,
    CourseStandardShow,
    NewStandardShow,
    BlockchainApplication,
    courseIntroduction,
    CourseIdea,
  },
  methods: {

    onSwiper() {
    },
    onSlideChange() {
    },
    //nav跳转
    navHandleClick(path) {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>


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
        justify-items: center;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;

        span {
          width: 100%;
          text-align: center;
          color: #fff;
          font-weight: bold;
        }
      }

      .nav_bar_box {
        height: 500px;
        width: 230px;
        border-radius: 15px;
        background-color: rgba(0, 0, 0, .5);
        padding: 15px 0;

        .nav_bar_box_item {
          display: flex;
          flex-direction: row;
          align-content: center;
          align-items: center;
          justify-content: space-between;
          justify-items: center;
          height: 34px;
          color: #fff;
          font-size: 12px;
          padding: 0 10px 0 40px;

          &-detail {
            width: 360px;
            height: 404px;
            background: #FFFFFF;
            border-radius: 8px;
            padding: 30px;
            position: absolute;
            left: 230px;
            top: 0;
            display: none;
          }

          &-name {
            font-size: 16px;
            font-weight: 600;
            color: #323232;
            font-family: 'Courier New', Courier, monospace;
            line-height: 16px;
          }

          &-main {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            &-item {
              width: 140px;
              height: 60px;
              background: #F5F5F8;
              border-radius: 4px;
              margin-top: 20px;
              display: flex;
              justify-content: space-between;
              padding: 18px 24px;

              .text {
                font-size: 14px;
                font-weight: 400;
                color: #323232;
                line-height: 24px;
              }
            }
          }

          &-icon {
            width: 300px;
            height: 142px;
            background: #F5F5F8;
            border-radius: 4px;
            margin-top: 20px;
            padding: 0 62px 0 42px;
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;

            img {
              width: 120px;
              height: 98px;
            }

            .text {
              font-size: 14px;
              font-weight: 400;
              color: #323232;
              line-height: 20px;
            }
          }

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          &:hover > .nav_bar_box_item-detail {
            display: block;
          }

          .text {
            cursor: pointer;
          }
        }
      }
    }
  }
}

.isolation_belt {
  position: relative;
  height: 270px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  .text {
    width: 100%;
    text-align: center;
    font-size: 44px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 80px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .course_container_box {
    margin-top: 46px;
  }
}

.course_container {
  background-color: #f9f9f9;

  .text {
    font-size: 32px;
    font-weight: 600;
    color: #323232;
    line-height: 48px;
    padding-top: 66px;
    text-align: center;
  }
}
</style>