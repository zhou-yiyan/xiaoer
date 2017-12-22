<template>
  <div class="content">
    <!--广告部分-->
    <banner :bannerMessage="bannerMessage"></banner>

    <!--产品介绍-->
    <div class="container">
      <!--介绍列表-->
      <ul class="show-us-box">
        <li
          v-for="(item,index) in historyUs"
          class="show-us-item"
          :class="index%2===0?'':'show-us-item-mid'">
          <img :src="item.src">
          <div class="show-us-text">
            <p v-html="item.text" class="show-us-item-text"></p>
          </div>
        </li>
      </ul>
      <!--联系方式-->
      <div class="history-us">
        <p v-for="(item,index) in callMe"
           class="history-us-row"
           :class="{'history-us-tit':index===0}">
          {{item}}
        </p>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Banner from '../components/Banner.vue'
  import myNav from '../components/nav.vue'
  export default{
    data(){
      return {
//          广告参数
        bannerMessage: {
          backgroundImageUrl: "url("+require("../assets/images/partner/partner-banner-01.jpg")+")",
          h1: "合作共建共赢汽车租赁市场",
          h4: "共同践行绿色出行理念"
        },
//          内容参数
        historyUs: [
          {
            src: require("../assets/images/partner/partner-show-01.jpg"),
            text: "&nbsp;&nbsp;分时用车对接汽车供应商合作<br>邀您共享智能共享汽车千亿级市场"
          },
          {
            src: require("../assets/images/partner/partner-show-02.jpg"),
            text: "日租用车对接汽车租赁商合作"
          },
          {
            src: require("../assets/images/partner/partner-show-03.jpg"),
            text: "合作共建汽车充电站，共享收益"
          }
        ],
//          联系方式
        callMe: [
          '联系方式',
          '朱经理',
          '联系电话：13136028636',
          '邮箱地址：syu-zhu@hnair.com',
          '公司地址：海南省海口市琼山区国兴大道海南大厦北门数据谷3层'
        ]
      }
    },
    //      组件列表
    components: {
      Banner,
    },
  }
</script>

<style scoped>
  .content{
    padding-top: 1.675rem;
  }
  .content .container {
    position: relative;
    width: 34.05rem;
    padding-top: 0;
    margin: 0 auto;
  }

  .content .container .show-us-box {
    position: relative;
    font-size: 0;
    text-align: center;
    padding-top: 1.55rem;
  }

  .content .container .show-us-box .show-us-item {
    display: inline-block;
    padding: 0 0.8rem;
    height: 9rem;
    width: 33.3%;
    position: relative;
  }

  .content .container .show-us-box .show-us-item img {
    width: 100%;
  }

  .content .container .show-us-box .show-us-item .show-us-text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .content .container .show-us-box .show-us-item-mid {
    border: 1px solid #e9e9e9;
    border-top: none;
    border-bottom: none;
  }

  .content .container .show-us-item-text {
    display: inline-block;
    margin: 0;
    padding: 0;
    color: #444;
    font-size: 0.5rem;
    line-height: 0.85rem;
    vertical-align: middle;
  }

  .content .container .history-us{
    padding-bottom: 2.5rem;
  }
  .content .container .history-us .history-us-row.history-us-tit{
    padding-left: 0.15rem;
    margin: 1.8rem 0 0.3rem;
    border-bottom: 1px solid #ccc;
    font-size: 0.6rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  .content .container .history-us .history-us-row{
    line-height: 1.15rem;
    padding-left: 0.95rem;
    border-bottom: none;
    font-size: 0.4rem;
  }
</style>
