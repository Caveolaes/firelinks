<template>
  <div class="profession_question">
    <div class="warp_container">
      <div class="title">关于职业发展，你是否有如下疑惑</div>
      <div class="profession_question_main">
        <div class="profession_question_item" v-for="(item,index) in dataArray" :key="index">
          <div class="img"><img :src="item.image" alt=""></div>
          <div class="subtitle">{{ item.title }}</div>
        </div>
      </div>
      <div class="btn">在线疑惑</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfessionQuestion",
  props: {
    title: {
      type: String,
      default() {
        return '关于职业发展，你是否有如下疑惑'
      }
    }
    , dataArray: {
      type: Array,
      default() {
        return [
          {
            image: '/src/assets/images/develop1.png',
            title: '零基础可以学区块链编程吗?'
          },
          {
            image: '/src/assets/images/develop2.png',
            title: '怎么自学区块链编程?'
          },
          {
            image: '/src/assets/images/develop3.png',
            title: '区块链工程师工资一般多少钱?'
          },
          {
            image: '/src/assets/images/develop4.png',
            title: '我不知道学什么?'
          },
          {
            image: '/src/assets/images/develop5.png',
            title: '学完之后能找到工作吗？'
          },
          {
            image: '/src/assets/images/develop6.png',
            title: '培训学校有用吗?'
          },
          {
            image: '/src/assets/images/develop7.png',
            title: '学习区块链编程要多少钱?'
          },
          {
            image: '/src/assets/images/develop8.png',
            title: '在职人员可以学吗?'
          },
        ]
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.profession_question {
  .warp_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    .title {
      font-size: 32px;
      font-weight: 600;
      color: #323232;
      line-height: 48px;
      padding-top: 66px;
      text-align: center;
    }

    .profession_question_main {
      margin-top: 36px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: center;
      align-items: center;

      .profession_question_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin-bottom: 40px;

        .img {
          width: 260px;

          img {
            width: 100%;
          }
        }

        .subtitle {
          font-size: 16px;
          font-weight: 400;
          color: #323232;
          line-height: 22px;
          margin-top: 10px;
        }
      }
    }

    .btn {
      width: 152px;
      line-height: 48px;
      background: linear-gradient(90deg, #FF9239 0%, #EC692B 100%);
      box-shadow: 0px 8px 20px 0px rgba(255, 98, 0, 0.35);
      border-radius: 30px;
      font-size: 18px;
      font-weight: 400;
      color: #FFFFFF;
      padding: 0 40px;
      cursor: pointer;
    }
  }
}
</style>