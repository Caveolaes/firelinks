<template>
  <div class="news" :style="{ background: bgc }">
    <div class="warp_container">

      <div class="title">{{ title }}</div>
      <div class="main_box">
        <div class="left_swiper">
          <p style="text-align: center">swiper+videojs</p>
        </div>
        <div class="news_box">
          <div class="news_box_header">
            <div class="text">最新动态</div>
            <div class="more" @click="jumpOutside('http://1chain.cn/news')">
              <div class="text">查看更多</div>
              <el-icon>
                <Right/>
              </el-icon>
            </div>
          </div>
          <div class="news_box_context">
            <div class="news_box_context_item" v-for="(item,index) in newData" :key="index"
                 @click="jumpOutside(item.url)">
              <div class="news_box_context_item-icon"
                   :style="{background:index>2?' #E6E6E6':' #F56D2C',color:index>2?'#646464':'#fff'}">
                {{ index }}
              </div>
              <div class="news_box_context_item-text">{{ item.title }}</div>
              <div class="news_box_context_item-time">{{ item.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//swiper
import Swiper from "swiper";
import "swiper/css";


//videojs
import videojs from "video.js";
import 'video.js/dist/video-js.css'

export default {
  name: "NewStandardShow",
  components: {
    Swiper,
  },
  data() {
    return {
      swiperConfig: {
        modules: [
          // Pagination, Navigation, Autoplay
        ],
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: true,
        pagination: true,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true
      },
      videoArray: [
        {
          url: "https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/video/video-1.mp4",
          post: 'https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/image/index/video/video_1.png'
        },
        {
          url: "https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/video/video-2.mp4",
          post: 'https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/image/index/video/video_1.png'
        },
        // {
        //   url: "https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/video/video-3.mp4",
        //   post: 'https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/image/index/video/video_3.jpg'
        // },
        // {
        //   url: "https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/video/video-4.mp4",
        //   post: 'https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/image/index/video/video_4.jpg'
        // },
        // {
        //   url: "https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/video/video-5.mp4",
        //   post: 'https://firellinks-image.oss-cn-shenzhen.aliyuncs.com/image/index/video/video_5.jpg'
        // },
      ],
      newData: [
        {
          title: '新债王”冈拉克认为美联储9月应该仅加息25个基点',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:58'
        }, {
          title: '持有32枚以上ETH的地址数量达19个月高点',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:34'
        },
        {
          title: '比特币挖矿难度达32.05T，创历史新高',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:10'
        },
        {
          title: 'Web3开发平台Alchemy正在为新的风险投资基金筹集Web3开发平台Alchemy正在为新的风险投资基金筹集',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 21:42'
        },
        {
          title: '数据: 近24小时全网爆仓3.38亿美元，比特币爆仓1.24数据: 近24小时全网爆仓3.38亿美元，比特币爆仓1.24',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:58'
        },
        {
          title: '美国FTC希望介入Celsius的破产案',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:58'
        },
        {
          title: 'Solana联合创始人: 希望看到以太坊的成功',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:58'
        },
        {
          title: 'Solana联合创始人: 希望看到以太坊的成功',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:58'
        },
        {
          title: 'Solana联合创始人: 希望看到以太坊的成功',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:58'
        },
        {
          title: 'Solana联合创始人: 希望看到以太坊的成功',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:58'
        },
        {
          title: 'Solana联合创始人: 希望看到以太坊的成功',
          url: 'https://www.bitcoin86.com/live/209870.html',
          time: '09/14 22:58'
        },
      ]
    }
  },

  props: {
    title: {
      type: String,
      default() {
        return 'web3动态'
      }
    },
    bgc: {
      type: String,
      default() {
        return '#fff'
      }
    }
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
    jumpOutside(url) {
      window.location.href = url
    }
  },

}
</script>
<style lang="scss" scoped>
.news {
  margin-top: 46px;


  .warp_container {
    .title {
      font-size: 32px;
      font-weight: 600;
      color: #323232;
      line-height: 48px;
      padding-top: 66px;
      text-align: center;
    }

    .main_box {
      display: flex;
      justify-content: space-between;
      margin-top: 46px;

      .left_swiper {
        width: 640px;
        height: 360px;
        overflow: hidden;
        border-radius: 16px;

        box-sizing: border-box;
        background-color: #eee;

      }

      .news_box {
        width: 560px;
        height: 360px;
        background: #FFFFFF;
        box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.08);
        border-radius: 16px;
        padding: 27px 50px 0;
        overflow: hidden;

        .news_box_header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          & > .text {
            font-size: 18px;
            font-weight: 600;
            color: #323232;
            line-height: 18px;
          }

          .more {
            display: flex;
            align-items: center;
            align-content: center;
            font-size: 12px;
            font-weight: 400;
            color: #969696;
            line-height: 16px;
            width: auto;
          }
        }

        .news_box_context {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: 18px;

          .news_box_context_item {
            display: flex;
            align-content: center;
            align-items: center;
            line-height: 32px;
            cursor: pointer;

            &-icon {
              text-align: center;
              line-height: 18px;
              height: 18px;
              width: 18px;
              border-radius: 50%;
              margin-right: 8px;
            }

            &-text {
              font-size: 14px;
              font-weight: 400;
              color: #323232;
              line-height: 32px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 350px;
              margin-right: 10px;
            }
          }
        }
      }
    }


  }
}
</style>