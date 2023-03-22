<template>
  <div class="courseintroduction">
    <div class="warp_container">
      <div
        class="courseintroduction_header"
        :style="{ background: headerColor }"
      >
        <div class="title">{{ title }}</div>
        <div class="enter_more">
          <div class="jewel">
            <img src="/src/assets/images/course_vip.png" alt="" />
          </div>
          <div class="text">进入VIP网校</div>
          <el-icon>
            <ArrowRight />
          </el-icon>
        </div>
      </div>
      <div class="courseintroduction_main">
        <div class="courseintroduction_top">
          <div class="courseintroduction_top_left_btn">
            <div class="ficourseintroduction_top_left_btn_first">
              <div class="sprite_chart0">
                <img src="/src/assets/images/course_ico.jpg" alt="" />
              </div>

              <div class="text">斥资百万搭建企业级实操环境</div>
            </div>
            <div class="ficourseintroduction_top_left_btn_list">
              <div class="ficourseintroduction_top_left_btn_list-item">
                <div class="sprite_chart1">
                  <img src="/src/assets/images/course_ico.jpg" alt="" />
                </div>
                <div class="text">课程大纲</div>
              </div>
              <div class="ficourseintroduction_top_left_btn_list-item">
                <div class="sprite_chart2">
                  <img src="/src/assets/images/course_ico.jpg" alt="" />
                </div>
                <div class="text">师资力量</div>
              </div>
              <div class="ficourseintroduction_top_left_btn_list-item">
                <div class="sprite_chart3">
                  <img src="/src/assets/images/course_ico.jpg" alt="" />
                </div>
                <div class="text">课程视频</div>
              </div>
              <div class="ficourseintroduction_top_left_btn_list-item">
                <div class="sprite_chart4">
                  <img src="/src/assets/images/course_ico.jpg" alt="" />
                </div>
                <div class="text">就业前景</div>
              </div>
            </div>
          </div>
          <div class="courseintroduction_top_right_btn">
            <img src="/src/assets/images/course_btn_a.png" alt="" />
          </div>
        </div>
        <div class="sub_course">
          <div
            class="sub_course_item"
            v-for="(item, index) in subCourse"
            :key="index"
          >
            <img :src="item.image" alt="" />
            <div class="text">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseIntroduction",
  props: {
    title: {
      type: String,
      default() {
        return "以太坊工程师";
      },
    },
    headerColor: {
      type: String,
      default() {
        return "#FF864C";
      },
    },
    subCourse: {
      type: Array,
      default() {
        return [
          {
            title: "以太坊前端技术",
            image: "/src/assets/images/course1.png",
          },
          {
            title: "操作系统和数据库",
            image: "/src/assets/images/course2.png",
          },
          {
            title: "以太坊常识",
            image: "/src/assets/images/course3.png",
          },
          {
            title: "以太坊合约编程",
            image: "/src/assets/images/course4.png",
          },
          {
            title: "以太坊密码学",
            image: "/src/assets/images/course5.png",
          },
          {
            title: "以太坊合约框架",
            image: "/src/assets/images/course6.png",
          },
          {
            title: "以太坊DApp开发",
            image: "/src/assets/images/course7.png",
          },
          {
            title: "以太坊智能合约开发",
            image: "/src/assets/images/course8.png",
          },
          {
            title: "以太坊DAICO开发",
            image: "/src/assets/images/course9.png",
          },
          {
            title: "数据结构和算法",
            image: "/src/assets/images/course10.png",
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.sprite_chart0 {
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0px;
  }
}
.sprite_chart1 {
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: -32px;
  }
}
.sprite_chart2 {
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: -64px;
  }
}
.sprite_chart3 {
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: -96px;
  }
}
.sprite_chart3 {
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: -96px;
  }
}
.sprite_chart4 {
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: -128px;
  }
}
.courseintroduction {
  .warp_container {
    overflow: hidden;
    .courseintroduction_header {
      padding: 0 30px;
      height: 64px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      border-radius: 16px 16px 0 0;
      .title {
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
        line-height: 64px;
      }

      .enter_more {
        display: flex;
        flex-direction: row;
        color: white;
        font-size: 14px;
        font-weight: 400;

        .jewel {
          width: 16px;

          img {
            width: 100%;
          }
        }
      }
    }
    .courseintroduction_main {
      background-color: white;
      margin-bottom: 80px;
      border-radius: 0 0 16px 16px;
      .courseintroduction_top {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        padding-left: 42px;
        padding-right: 20px;
        height: 114px;
        .courseintroduction_top_left_btn {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          align-content: center;
          .ficourseintroduction_top_left_btn_first {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            align-content: center;
            .text {
              font-size: 14px;
              font-weight: 400;
              color: #323232;
              display: flex;
              align-items: center;
            }
          }
          .ficourseintroduction_top_left_btn_list {
            display: flex;
            &-item {
              display: flex;
              align-content: center;
              align-items: center;
              flex-wrap: wrap;
              padding: 12px;
              margin-left: 30px;
              &:hover {
                box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
                border-radius: 4px;
                transition: all 0.2s;
              }
              .text {
              }
            }
          }
        }
      }
      .sub_course {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 30px;
        .sub_course_item {
          margin-bottom: 20px;
          position: relative;
          .text {
            position: absolute;
            padding: 0 6px;
            left: 0px;
            bottom: 0px;
            width: 100%;
            font-size: 14px;
            font-family: PingFangHK-Semibold, PingFangHK;
            font-weight: 600;
            color: #ffffff;
            line-height: 36px;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.5) 100%
            );
          }
        }
      }
    }
  }
}
</style>