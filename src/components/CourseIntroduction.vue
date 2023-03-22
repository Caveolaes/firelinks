<template>
  <div class="courseintroduction">
    <div class="warp_container">
      <div class="courseintroduction_header" :style="{background:headerColor}">
        <div class="title">{{ title }}</div>
        <div class="enter_more">
          <div class="jewel">
            <img src="/src/assets/images/course_vip.png" alt="">
          </div>
          <div class="text">进入VIP网校</div>
          <el-icon>
            <ArrowRight/>
          </el-icon>
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
        return '以太坊工程师'
      }
    },
    headerColor: {
      type: String,
      default() {
        return '#FF864C'
      }
    },
    subCourse: {
      type: Array,
      default() {
        return [
          {
            title: '以太坊前端技术',
            image: '/src/assets/images/course1.png'
          },
          {
            title: '操作系统和数据库',
            image: '/src/assets/images/course2.png'
          },
          {
            title: '以太坊常识',
            image: '/src/assets/images/course3.png'
          },
          {
            title: '以太坊合约编程',
            image: '/src/assets/images/course4.png'
          },
          {
            title: '以太坊密码学',
            image: '/src/assets/images/course5.png'
          },
          {
            title: '以太坊合约框架',
            image: '/src/assets/images/course6.png'
          },
          {
            title: '以太坊DApp开发',
            image: '/src/assets/images/course7.png'
          },
          {
            title: '以太坊智能合约开发',
            image: '/src/assets/images/course8.png'
          },
          {
            title: '以太坊DAICO开发',
            image: '/src/assets/images/course9.png'
          },
          {
            title: '数据结构和算法',
            image: '/src/assets/images/course10.png'
          },
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.courseintroduction {
  .warp_container {

    .courseintroduction_header {
      border-radius: 16px 16px 0px 0px;
      padding: 0 30px;
      //position: relative;
      height: 64px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;

      .title {
        font-size: 20px;
        font-weight: 600;
        color: #FFFFFF;
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
  }
}
</style>