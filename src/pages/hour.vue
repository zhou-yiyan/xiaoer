<template>
  <div class="content">
    <banner :bannerMessage="bannerMessage"></banner>
    <!--核心优势-->
    <div class=" advantages container">
      <div class="sub-tit-box">
        <p class="sub-tit">{{subTit.advantages}}</p>
      </div>
      <div class="advantages-box">
        <div class="item-box" v-for="(item,index) in advantages">
          <img :src="item.src">
          <p class="item-tit">{{item.tit}}</p>
          <p class="item-info">{{item.info}}</p>
        </div>
      </div>
    </div>
    <!--车型及价格-->
    <div class="car-models container">
      <div class="sub-tit-box">
        <p class="sub-tit">{{subTit.carModels}}</p>
      </div>
      <div class="car-models-box">
        <p class="item-box-tit">{{subTit.carModelsTit}}</p>
        <div class="item-box" v-for="(item,index) in carModelsList">
          <div class="item">
            <img :src="item.src">
            <div class="item-text-box">
              <p class="item-tit">
                {{item.itemTit}}
                <span class="item-tit-sub">{{item.itemSubTit}}</span>
              </p>
              <p class="item-info-right">{{item.itemInfoRight}}</p>
              <p class="item-info">{{item.itemInfo1}}</p>
              <p class="item-info">{{item.itemInfo2}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-code></my-code>
  </div>
</template>

<script type="text/ecmascript-6">
  import Banner from '../components/Banner.vue'
  import myCode from '../components/QRcode.vue'
  export default{
    data(){
      return{
        bannerMessage: {
          backgroundImageUrl: "url("+require("../assets/images/hour/hour-banner-01.jpg")+")",
          h1: "分时用车 共享出行新模式",
          h4: "免押金，按分钟计费，经济实惠",
          otherText:"网点众多，随取随还，方便快捷"
        },
        advantages: [
          {
            src: require('../assets/images/hour/hour-well-01.png'),
            tit: '流程极简 用车快人一步',
            info: '关注微信公众号或下载小二租车APP，花费3分钟注册并提交驾照等信息，授权芝麻信用即可智能出行。'
          },
          {
            src: require('../assets/images/hour/hour-well-02.png'),
            tit: '分时超低价 共享用车更经济',
            info: '按时间和里程付费，时长费低至0.1元/分钟，超级划算，出行更加经济实惠。'
          },
          {
            src: require('../assets/images/hour/hour-well-03.png'),
            tit: '按时间和里程付费，时长费低至0.1元/分钟，超级划算，出行更加经济实惠。',
            info: '自助开关车门取还车，全程无人值守，享受智能化用车服务。'
          },
          {
            src: require('../assets/images/hour/hour-well-04.png'),
            tit: '用车免押金 不交押金更省心',
            info: '授权芝麻信用，芝麻信用分达到700分以上即可免押金租车。'
          },
          {
            src: require('../assets/images/hour/hour-well-05.png'),
            tit: '网点众多 随取随还',
            info: '城市遍布网点，随取随还方便快捷。'
          },
          {
            src: require('../assets/images/hour/hour-well-06.png'),
            tit: '出行保障 专业安全的用车服务',
            info: '客服随时接待咨询，专业人员负责车辆维护和调度，免除您的后顾之忧。'
          }
        ],
        subTit: {
          advantages: '核心优势',
          carModels: '车型及价格',
          carModelsTit: '*具体价格以线上App为准'
        },
        carModelsList: [
          {
            src: require('../assets/images/hour/hour-cars-01.jpg'),
            itemTit: '北汽EV150',
            itemSubTit: '5座 | 电动汽车',
            itemInfoRight: '起步价：5元',
            itemInfo1: '时长费：0.4元/分钟（日封顶144元）',
            itemInfo2: '里程费：0元/公里'
          },
          {
            src: require('../assets/images/hour/hour-cars-02.jpg'),
            itemTit: '康迪K17',
            itemSubTit: '5座 | 电动汽车',
            itemInfoRight: '起步价：5元',
            itemInfo1: '时长费：0.3元/分钟（日封顶144元）',
            itemInfo2: '里程费：0元/公里'
          },
          {
            src: require('../assets/images/hour/hour-cars-03.jpg'),
            itemTit: '奇瑞EQ',
            itemSubTit: '4座 | 电动汽车',
            itemInfoRight: '起步价：5元',
            itemInfo1: '时长费：0.3元/分钟（日封顶144元）',
            itemInfo2: '里程费：0元/公里'
          },
          {
            src: require('../assets/images/hour/hour-cars-04.jpg'),
            itemTit: '东风E30L',
            itemSubTit: '4座 | 电动汽车',
            itemInfoRight: '起步价：0.1元',
            itemInfo1: '时长费：0.2元/分钟（日封顶96元）',
            itemInfo2: '里程费：0.4元/公里'
          },
          {
            src: require('../assets/images/hour/hour-cars-05.jpg'),
            itemTit: '江淮IEV4',
            itemSubTit: '5座 | 电动汽车',
            itemInfoRight: '起步价：0.1元',
            itemInfo1: '时长费：0.25元/分钟（日封顶120元）',
            itemInfo2: '里程费：0.4元/公里'
          },
          {
            src: require('../assets/images/hour/hour-cars-06.jpg'),
            itemTit: '斯柯达昕动',
            itemSubTit: '5座 | 燃油汽车',
            itemInfoRight: '起步价：5元',
            itemInfo1: '时长费：0.1元/分钟（日封顶144元）',
            itemInfo2: '里程费：1.3元/公里'
          },
        ]
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

  /*优势外盒子*/
  .content .advantages {
    padding-top: 2.05rem;
    width: 100%;
    min-width: 34.05rem
  }

  /*标题盒子*/
  .content .sub-tit-box {
    text-align: center;
    position: relative;
    padding-top: 0;
    margin: 0 auto;
    width: 34.05rem;
  }

  /*标题*/
  .content .sub-tit-box .sub-tit {
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: #515151
  }

  /*优势介绍外盒子*/
  .content .advantages .advantages-box {
    position: relative;
    text-align: center;
    width: 34.05rem;
    margin: 0 auto;
  }

  /*优势介绍内盒子*/
  .content .advantages .advantages-box .item-box {
    padding-left: 0.375rem;
    padding-right: 0.375rem;
    display: inline-block;
    width: 33.33%;
    font-size: 0;
    vertical-align: top;
    height: 10.2rem;
    overflow: hidden;
  }

  /*优势介绍图片*/
  .content .advantages .advantages-box .item-box img {
    margin: 0 auto;
    width: 4.425rem;
    height: 4.425rem;
  }

  /*优势介绍小标题*/
  .content .advantages .advantages-box .item-box .item-tit {
    margin-bottom: 0.2rem;
    font-size: 0.6rem;
    color: #333;
  }

  /*优势介绍内容*/
  .content .advantages .advantages-box .item-box .item-info {
    margin: 0 auto;
    width: 7.5rem;
    text-align: left;
    font-size: 0.4rem;
    line-height: 0.7rem;
    color: #767676;
  }

  /*车型及价格*/
  .content .car-models {
    padding-top: 1.55rem;
    background-color: #fcfcfc;
    width: 100%;
    min-width: 34.05rem;
  }

  .content .car-models .car-models-box {
    padding-top: 2rem;
    font-size: 0;
    text-align: center;
    position: relative;
    width: 34.05rem;
    margin: 0 auto;
  }

  .content .car-models .car-models-box .item-box-tit {
    color: #333;
    font-size: 0.45rem;
    height: 0.45rem;
    text-align: right;
    margin: 0 0 0.35rem;
    padding: 0 0.475rem;
  }

  .content .car-models .car-models-box .item-box {
    padding-left: 0.375rem;
    padding-right: 0.375rem;
    display: inline-block;
    width: 33.33%;
    font-size: 0;
    vertical-align: top;
  }

  .content .car-models .car-models-box .item-box .item {
    text-align: left;
    margin: 0 auto 1.925rem;
    width: 100%;
    overflow: hidden;
  }

  .content .car-models .car-models-box .item-box .item img {
    margin: 0;
    width: 100%;
    height: 4.55rem;
  }

  .content .car-models .car-models-box .item-box .item-text-box {
    padding: 0.55rem;
    color: #767676;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    height: 3.875rem;
  }

  .content .car-models .car-models-box .item-box .item-text-box .item-tit {
    margin-bottom: 0.75rem;
    font-size: 0.45rem;
    color: #333333;
  }

  .content .car-models .car-models-box .item-box .item-text-box .item-tit .item-tit-sub{
    margin-right: 0.15rem;
    color: #676767;
    font-size: 0.35rem;
  }
  .content .car-models .car-models-box .item-box .item-text-box .item-info-right{
    position: absolute;
    top: 0.65rem;
    right: 0.55rem;
    font-size: 0.35rem;
  }
  .content .car-models .car-models-box .item-box .item-text-box .item-info{
    font-size: 0.35rem;
    line-height: 0.7rem;
  }
  .content .car-models .car-models-box .item-box .item:hover .item-text-box {
    background-color: #00cc67;
    color: #fff;
  }
  .content .car-models .car-models-box .item-box .item:hover .item-text-box>p{
    color: #fff;
  }
  .content .car-models .car-models-box .item-box .item:hover .item-text-box>p>span{
    color: #fff;
  }

</style>
