<template>
  <div class="course_idea">
    <div class="warp_container">
      <div class="title">{{ title }}</div>
      <div class="course_idea_box">
        <div class="course_idea_box_item" v-for="(item,index) in ideaArr" :key="index">
          <div class="course_idea_box_item-image">
            <img :src="item.image" alt="">
          </div>
          <div class="course_idea_box_item-title" :style="{color:index%2==0?'#4D91FF':'#F56D2C'}">{{ item.title }}</div>
          <div class="course_idea_box_item-des">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseIdea",
  props: {
    title: {
      type: String,
      default() {
        return '火链学院-课程设计理念'
      }
    },
    ideaArr: {
      type: Array,
      default() {
        return [
          {
            image: '/src/assets/images/idea1.png',
            title: '教学目标明确',
            desc: '针对高中/大学毕业生，没有编程基础也不用怕，我们有对IT或区块链零基础的人群设计的专项入门课程。',
          },
          {
            image: '/src/assets/images/idea2.png',
            title: '课程科学合理',
            desc: '从语言介绍到区块链高并发服务器、前端、后端、密码学安全理论与开发、智能合约等技术及面试技巧分阶段设计授课内容。',
          },
          {
            image: '/src/assets/images/idea3.png',
            title: '项目实战式教学',
            desc: '采用代码和项目驱动式教学，拒绝对照PPT神吹，真正的IT大神手把手带你一路打怪练级。',
          },
          {
            image: '/src/assets/images/idea4.png',
            title: '15年教学经验',
            desc: '讲师的教学能力在课堂上的表现就是教学基本功。讲师的课堂驾驭能力、实践操作能力、语言表达能力均来自多年的授课经验及备课。',
          }
        ]
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.course_idea {
  background-color: #F5FAFF;
  padding-bottom: 76px;
  .warp_container {
    .title {
      font-size: 32px;
      font-weight: 600;
      color: #323232;
      line-height: 48px;
      padding: 66px 0;
      text-align: center;
    }

    .course_idea_box {
      margin-top: 70px;
      display: flex;
      justify-content: space-between;

      .course_idea_box_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        width: 240px;
        height: 278px;
        padding: 0 35px;
        background-color: #fff;
        border-radius: 12px;
        &-image {
          margin-top: -76px;
          width: 180px;
          img {
            width: 100%;
          }
        }

        &-title {
          font-size: 20px;
          font-weight: 600;
          color: #4D91FF;
          line-height: 28px;
          text-align: center;
          margin-bottom: 20px;
        }
        &-des{
          font-size: 14px;
          font-weight: 400;
          color: #646464;
          line-height: 24px;
        }
      }
    }
  }
}
</style>