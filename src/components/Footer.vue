<template>
  <div class="footer">
    <div class="warp_container">
      <div class="footer_main">
        <div class="own">
          <div class="logo">
            <img src="/src/assets/images/footer-logo.png" alt="" />
          </div>
          <div class="own_desc">
            <div class="own_desc_item">电话：13631623746</div>
            <div class="own_desc_item">邮箱：xiaofei@firelinks.cn</div>
            <div class="own_desc_item">
              地址：深圳市航城大道U8智造产业园U6栋5楼
            </div>
          </div>
        </div>
        <div class="relation">
          <div class="relation_we">
            <div class="relation_we_title">关于火链</div>
            <div class="relation_we_box">
              <div class="relation_we_box_item">
                火链学院隶属于火链数字科技有限公司，旨在培养优秀的区块链核心岗位人才，以互联网和移动互联网研发人才需求为切入点，通过扎实知识基础、锻炼专业技能、提升职业素养，全面提升人才的核心竞争力。
              </div>
              <div class="relation_we_box_item">
                火链学院从供需两端，分析区块链人才市场现状，并预测区块链人才市场发展的趋势。为政府、企业、高校、人才等市场相关方提供参考，共同促进区块链人才市场和整体行业持续健康发展。
              </div>
            </div>
          </div>
          <div class="relation_link">
            <div class="relation_we_title">关于火链</div>
            <div class="relation_we_box">
              <router-link to="/baidu">四川科技职业技术学院</router-link>
              <router-link to="/baidu">深圳奋达职业技术学院</router-link>
              <router-link to="/baidu">广东酒店管理职业技术学院</router-link>
              <router-link to="/baidu">广东创新科技职业学院</router-link>
              <router-link to="/baidu">江西理工大学</router-link>
              <router-link to="/baidu">重庆房地产职业学院</router-link>
              <router-link to="/baidu">江西工程学院</router-link>
            </div>
          </div>
        </div>
        <div class="server">
          <div class="img">
            <img src="/src/assets/images/kefu.png" alt="" />
          </div>
          <div class="text">客服微信号</div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer_bottom">
    © 2019 火链学院—专注于区块链技术培训 粤ICP备18093956号
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 304px;
  background-color: #303234;
  padding-top: 40px;
  .warp_container {
    .footer_main {
      display: flex;
      .own {
        width: 280px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        .logo {
          width: 150px;
          height: 60px;
          img {
            width: 100%;
          }
        }
        .own_desc {
          margin-top: 30px;
          &_item {
            width: 240px;
            font-size: 14px;
            color: #ffffff;
            line-height: 20px;
            margin-bottom: 10px;
          }
        }
      }
      .relation {
        margin-left: 50px;
        .relation_we {
          &_title {
            font-size: 14px;
            color: #ffffff;
            line-height: 20px;
            margin-bottom: 10px;
          }
          &_box {
            width: 640px;
            font-size: 12px;
            color: #999;
            line-height: 20px;
          }
        }
        .relation_link {
          margin-top: 20px;
          .relation_we_title {
            font-size: 14px;
            color: #ffffff;
            line-height: 20px;
            margin-bottom: 10px;
          }
          .relation_we_box {
            width: 640px;
            font-size: 12px;
            color: #999;
            line-height: 20px;
            a {
              text-decoration: none; /* 如果需要去掉下划线 */
              display: inline;
              width: auto;
              font-size: 12px;
              color: #999;
              margin-right: 12px;
              line-height: 20px;
            }
          }
        }
      }
      .server {
        margin-left: 90px;
        .img {
          width: 120px;
          height: 120px;
          img {
            width: 100%;
          }
        }
        .text {
          color: #ffffff;
          text-align: center;
          font-size: 12px;
          margin-top: 12px;
        }
      }
    }
  }
}

.footer_bottom {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  background-color: #282828;
}
</style>