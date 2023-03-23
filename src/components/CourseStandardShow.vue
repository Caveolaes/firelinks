<template>
  <div class="course" :style="{ background: bgc }">
    <div class="warp_container">
      <div class="title">
        {{ title }}
      </div>
      <div class="main_box">
        <div class="main_box_item" v-for="index in 8" :key="index">
          <div class="main_box_item-img">
            <img :src="`/src/assets/images/case` + index + '.png'" alt="" />
          </div>
          <div class="main_box_item-bottom">
            <div class="main_box_item-subtitle">
              元宇宙-虚拟空间与现实的结合
            </div>
            <div class="main_box_item-priceandeye">
              <div class="main_box_item-price">¥ <span>550</span></div>
              <div class="main_box_item-watch">
                <div class="main_box_item-watch-icon">
                  <img src="/src/assets/images/eye.png" alt="" />
                </div>
                <div class="main_box_item-watch-num">666</div>
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
  name: "CourseStandardShow",
  props: {
    title: {
      type: String,
      default() {
        return "课程展示";
      },
    },
    bgc: {
      type: String,
      default() {
        return "#f9f9f9";
      },
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.course {
  padding-bottom: 100px;

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
      flex-direction: row;
      flex-wrap: wrap;
      padding-top: 8px;
      justify-content: space-between;

      .main_box_item {
        width: 280px;
        margin-top: 28px;
        border-radius: 8px;
        background-color: #fff;

        &-img {
          width: 280px;

          img {
            width: 100%;
          }
        }

        &-bottom {
          padding: 0 14px;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        &-subtitle {
          font-size: 14px;
          font-weight: 400;
          color: #323232;
          line-height: 20px;
        }

        &-priceandeye {
          display: flex;
          justify-content: space-between;
          align-content: center;
          align-items: center;
          margin-top: 8px;
        }

        &-price {
          font-size: 10px;
          font-weight: 400;
          color: #f56d2c;
          line-height: 14px;

          span {
            font-size: 16px;
            font-weight: 600;
            color: #f56d2c;
            line-height: 22px;
          }
        }

        &-watch {
          display: flex;

          &-icon {
            width: 10px;
          }

          &-num {
            font-size: 12px;
            font-weight: 400;
            color: #b2b2b2;
            margin-left: 8px;
          }
        }
      }
    }
  }
}
</style>