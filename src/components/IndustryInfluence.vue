<template>
  <div class="industry_influence">
    <div class="warp_container">
      <div class="topbox">
        <div class="topbox_title">成就行业口碑影响力</div>
        <div class="topbox_subtitle">
          （排名不分先后，仅展示部分合作企业/机构）
        </div>
      </div>
      <div class="img">
        <img src="/src/assets/images/success_bg.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 行业影响力
  name: "IndustryInfluence",
  props: {
    dataArray: {
      type: Array,
      default() {
        return [{}];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.industry_influence {
  padding-bottom: 96px;
  .warp_container {
    text-align: center;

    .topbox {
      .topbox_title {
        font-size: 32px;
        font-weight: 600;
        color: #323232;
        line-height: 48px;
        padding-top: 66px;
      }
      .topbox_subtitle {
        font-size: 16px;
        font-weight: 400;
        color: #646464;
        line-height: 22px;
      }
    }
    .img {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>