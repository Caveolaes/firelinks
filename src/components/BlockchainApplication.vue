<template>
  <div class="blockchainapplication" :style="{ background: bgc }">
    <div class="warp_container">

      <div class="title">{{ title }}</div>
      <div class="main_box">
        <div class="main_box_item">
          <div class="title">区块链与新一代信息技术的关系</div>
          <div class="main_box_item_context_box">
            <div class="main_box_item_context_box-item" v-for="(item,index) in 5" :key="index">
              <div class="main_box_item_context_box-item-icon">
                <img src="/src/assets/images/application1.png">
              </div>
              <div class="main_box_item_context_box-item-con">
                <div class="main_box_item_context_box-item-con-subtitle">大数据</div>
                <div class="main_box_item_context_box-item-con-con">
                  存储基础设施
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main_box_middle">
          <img src="/src/assets/images/application_img.png">
        </div>
        <div class="main_box_item">
          <div class="title">区块链与新一代信息技术的关系</div>
          <div class="main_box_item_context_box">
            <div class="main_box_item_context_box-item" v-for="(item,index) in 5" :key="index">
              <div class="main_box_item_context_box-item-icon">
                <img src="/src/assets/images/application1.png">
              </div>
              <div class="main_box_item_context_box-item-con">
                <div class="main_box_item_context_box-item-con-subtitle">大数据</div>
                <div class="main_box_item_context_box-item-con-con">
                  存储基础设施
                </div>
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
  name: "BlockchainApplication",
  props: {
    title: {
      type: String,
      default() {
        return '区块链发展现状以及应用'
      }
    },
    bgc: {
      type: String,
      default() {
        return '#fff'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.blockchainapplication {
  .warp_container {
    & > .title {
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
      align-items: center;
      margin-top: 36px;

      .main_box_item {
        width: 340px;
        height: 400px;
        padding: 40px 0 0 50px;
        background: #FFFFFF;
        box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.06);
        border-radius: 8px;

        .title {
          font-size: 16px;
          font-weight: 600;
          color: #969696;
          line-height: 16px;
        }

        .main_box_item_context_box {
          margin-top: 18px;

          &-item {
            display: flex;
            align-items: center;
            align-content: center;
            margin-top: 16px;

            &-icon {
              width: 28px;

              img {
                width: 100%;
              }
            }

            &-con {
              margin-left: 10px;

              &-subtitle {
                font-size: 16px;
                font-weight: 600;
                color: #323232;
                line-height: 22px;
              }

              &-con {
                display: block;
                font-size: 14px;
                font-weight: 400;
                color: #969696;
                line-height: 20px;
              }
            }
          }
        }
      }

      .main_box_middle {
        width: 304px;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>