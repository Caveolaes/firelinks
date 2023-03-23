<template>
  <div class="assiststudy">
    <div class="warp_container">
      <div class="title">{{ title }}</div>
      <div class="assiststudy_main">
        <div class="t_box">
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist1.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">课堂氛围打造</div>
              <div class="right_text_des">
                老师们寓教于乐，通过生动的案例把晦涩的编程知识贯通起来，使学习过程轻松，吸收效率高
              </div>
            </div>
          </div>
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist2.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">每日自习辅导</div>
              <div class="right_text_des">
                为每个就业班都安排了一名指导老师，利用晚自习的时间解答学员问题，进一步巩固和加强课上知识
              </div>
            </div>
          </div>
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist3.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">细心生活照顾</div>
              <div class="right_text_des">
                从学员学习中的心态调整到生活中的困难协助，从课上班级氛围塑造到课下多彩的班级活动，班主任暖心鼓励相伴
              </div>
            </div>
          </div>
        </div>
        <div class="f_box">
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist4.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">期末定位辅导</div>
              <div class="right_text_des">
                我们会对阶段性考试成绩差的学员进行一对一或一对多的辅导。让他们尽快克服自卑心理，及时赶上学习进度，增加自信
              </div>
            </div>
          </div>
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist5.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">就业指导</div>
              <div class="right_text_des">
                小到五险一金的解释、面试礼仪的培训；大到500强企业面试实训及如何针对性地制定复习计划，帮助学员拿到Offer
              </div>
            </div>
          </div>
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist6.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">学院综合能力评定分析</div>
              <div class="right_text_des">
                从学员的基本信息到技术掌握能力，从团队协作能力到计划总结能力，做到更了解自己，查漏补缺，综合提高
              </div>
            </div>
          </div>
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist7.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">教学反馈系统</div>
              <div class="right_text_des">
                学有目标，习有纲领。有任何问题、想法、建议、意见，都可以随时反馈并能及时得到答复
              </div>
            </div>
          </div>
        </div>
        <div class="t_box">
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist8.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">学习测试系统</div>
              <div class="right_text_des">
                阶段课程结束，对于阶段知识点进行综合测评，大幅度提高学生掌握知识的综合运用能力
              </div>
            </div>
          </div>
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist9.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">在线作业系统</div>
              <div class="right_text_des">
                学有所练，课上学习的知识课下通过在线学习平台，进行巩固加强训练，牢牢掌握所学知识
              </div>
            </div>
          </div>
          <div class="assiststudy_item">
            <div class="img">
              <img src="/src/assets/images/assist10.png" alt="">
            </div>
            <div class="right_text">
              <div class="right_text_title">学习任务手册</div>
              <div class="right_text_des">
                把大目标分解为无数个小目标，量化到每天，学起来更有方向感
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //帮助学习
  name: "AssistStudy",
  props: {
    title: {
      type: String,
      default() {
        return '全新全意辅助你的学习'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.assiststudy {
  width: 100%;
  height: auto;
  background-color: #F5FAFF;
  padding-bottom: 70px;

  .warp_container {
    width: 1410px;

    .title {
      font-size: 32px;
      font-weight: 600;
      color: #323232;
      line-height: 48px;
      padding-top: 66px;
      text-align: center;
    }

    .assiststudy_main {
      display: flex;
      flex-direction: column;
      margin-top: 36px;

      .t_box {
        display: flex;
        justify-content: space-between;
        padding: 0 180px;
        margin-bottom: 30px;

      }

      .f_box {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        padding: 0;
      }

      .assiststudy_item {
        display: flex;
        width: 330px;
        height: 170px;
        background-color: #fff;
        padding: 30px 20px;
        border-radius: 12px;

        .img {
          width: 64px;

          img {
            width: 100%;
          }
        }

        .right_text {
          flex: 1;
          margin-left: 12px;

          &_title {
            font-size: 18px;
            font-weight: 600;
            color: #323232;
            line-height: 25px;
            margin-bottom: 10px;
          }

          &_des {
            font-size: 14px;
            font-weight: 400;
            color: #969696;
            line-height: 22px;
          }

        }
      }
    }
  }
}
</style>