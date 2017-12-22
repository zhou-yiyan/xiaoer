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
        </div>
        <div class="day-item item-right">
          <img :src="item.src">
        </div>
      </div>
    </div>
    <!--二维码-->
    <my-code></my-code>
  </div>
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
          backgroundImageUrl: "url(" + require("../assets/images/charge/charge-banner-01.jpg") + ")",
          h1: "您身边的充电桩",
          h4: "绿色充电，便捷出行"
        },
//          内容参数
        chargeInfo: [
          {
            src: require('../assets/images/charge/charge-map-01.png'),
            text1: '与海南省十个实现政府达成',
            text2: '排他性新能源战略资源合作关系'
          },
          {
            text1: '自建1330个充电桩',
            text2: '支持新国标充电接口，支持快、慢充模式',
            src: require('../assets/images/charge/charge-map-02.png')
          },
          {
            src: require('../assets/images/charge/charge-map-03.png'),
            text1: '手机扫码在线智能充电',
            text2: '享受便捷高效的充电服务'
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

  /*第一行第二个P标签换行，更换width宽度*/
  .content>div:nth-of-type(2) .container .item-left{
    width: 49.5%;
  }
  .content>div:nth-of-type(2) .container .item-right{
    width: 49.5%;
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
