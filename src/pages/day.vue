<template>

  <div class="content">
    <!--给Banner组件传广告参数-->
    <banner :bannerMessage="bannerMessage"></banner>
    <!--根据内容参数渲染，第二个改变背景色-->
    <div class="min-container"
         v-for="(item,index) in chargeInfo"
         :style="{backgroundColor:index%2==0?'':'#fcfcfc'}">
      <!--根据条件改变p和img的先后顺序-->
      <div class="container" v-if="index%2==0">
        <div class="day-item item-left">
          <img :src="item.src">
        </div>
        <div class="day-item item-right">
          <p>{{item.text1}}</p>
          <p>{{item.text2}}</p>
        </div>
      </div>
      <div class="container" v-else>
        <div class="day-item item-left">
          <p>{{item.text1}}</p>
          <p>{{item.text2}}</p>
          <p>{{item.text3}}</p>
        </div>
        <div class="day-item item-right">
          <img :src="item.src">
        </div>
      </div>
    </div>
    <!--二维码-->
    <my-code></my-code>
  </div>
</template>

<script type="text/ecmascript-6">
  import Banner from '../components/Banner.vue'
  import myCode from '../components/QRcode.vue'
  import myNav from '../components/nav.vue'
  export default{
    data(){
      return {
//          广告参数
        bannerMessage: {
          backgroundImageUrl: "url(" + require("../assets/images/day/day-banner-01.jpg") + ")",
          h1: "日租用车",
          h4: "方便、舒适、经济、安全就在你身边"
        },
//          内容参数
        chargeInfo: [
          {
            src: require('../assets/images/day/day-map-01.png'),
            text1: '网点覆盖34个热门旅游城市',
            text2: '自驾出行，畅游最美人间'
          },
          {
            src: require('../assets/images/day/day-map-02.png'),
            text1: '15000+辆平台车辆',
            text2: "豪华、舒适、商务、经济",
            text3: '多种车型随心选'
          },
          {
            src: require('../assets/images/day/day-map-03.png'),
            text1: '多个租赁商竞价',
            text2: '全网更低价更省钱'
          }
        ],
      }
    },
    components: {
      Banner,
      myCode
    }
  }
</script>

<style scoped>
  .content {
    padding-top: 1.675rem;
  }

  .content .min-container {
    width: 100%;
    min-width: 34.05rem;
    padding-top: 2.45rem;
  }

  .content .min-container .container {
    position: relative;
    width: 34.05rem;
    padding-top: 0;
    margin: 0 auto;
    font-size: 0;
    text-align: left;
  }

  .content .min-container .container .item-left {
    width: 60%;
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
    text-align: left;
  }

  .content .min-container .container .item-right {
    width: 39.5%;
    display: inline-block;
    text-align: right;
  }

  .content .min-container .container .day-item img {
    width: 12.575rem;
    margin-left: 2.5rem;
  }

  .content .min-container .container .day-item p {
    text-align: center;
    margin: 0.375rem 0;
    font-size: 1rem;
    line-height: 1.45rem;
  }
</style>
