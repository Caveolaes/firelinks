<template>
  <div class="facilitye_nvironment">
    <div class="warp_container">
      <div class="title">{{ title}}</div>
      <div class="facilitye_nvironment_main">
        <div class="facilitye_nvironment_swiper"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 设施环境
  name: "FacilityEnvironment",
  props: {
    title: {
      type: String,
      default() {
        return '一流的设施，舒适的环境'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.facilitye_nvironment{
  padding-bottom: 90px;
  .warp_container{
    .title{
      font-size: 32px;
      font-weight: 600;
      color: #323232;
      line-height: 48px;
      padding-top: 66px;
      text-align: center;
    }
    .facilitye_nvironment_main{
      height: 270px;
      width: 100%;
      background-color: pink;
    }
  }
}
</style>