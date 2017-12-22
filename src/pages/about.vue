<template>
  <div class="content">
    <banner :bannerMessage="bannerMessage"></banner>
    <div class="container">
      <div class="show-us">
        <div class="item-left">
          <img src="../assets/images/about/about-show-01.png">
        </div>
        <div class="item-right">
          <p>
            小二租车是世界500强海航集团旗下创投企业，致力于建设国内最大的互联网+共享汽车运营生态体系。2015年10月，小二租车率先在海南引入“共享汽车”概念，通过自主研发的互联网+车联网技术实现了“自助订车寻车”“手机开门锁门”“自助充电补电”“自助结算还车”这一整套的分时用车模式。
          </p>
        </div>
        <div class="history-us">
          <p class="history-us-row history-us-tit">发展历程</p>
          <p v-for="(item,index) in historyUs" class="history-us-row">
            <span class="list-tit">{{item.title}}</span>
            <span class="list-icon"></span>
            <span class="list-text">{{item.listText}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Banner from '../components/Banner'
  import myNav from '../components/nav.vue'
  export default{
    data(){
      return{
        bannerMessage:{
          backgroundImageUrl:"url(" + require("../assets/images/about/about-banner-01.jpg") + ")",
          h1:"我们的使命",
          h4:"降低人类出行成本，自由连接城市，拉近城市距离"
        },
        historyUs:[
          {
            title:"2017年7月",
            listText:"进入西安共享汽车市场，投放第一批燃油车200辆"
          },
          {
            title:"2017年2月",
            listText:"完成A轮融资"
          },
          {
            title:"2016年12月",
            listText:"成为海南最大车桩位一体化新能源出行平台"
          },
          {
            title:"2016年7月",
            listText:"进入分时租赁细分市场"
          },
          {
            title:"2015年10月",
            listText:"投放第一批自营电动汽车200辆，自建充电桩200个"
          },
          {
            title:"2015年6月",
            listText:"成为海南最大互联网租车平台"
          },
          {
            title:"2015年5月",
            listText:"App上线"
          },
        ]
      }
    },
    components: {
      Banner
    }
  }
</script>

<style scoped>
  .content{
    padding-top: 1.675rem;
  }
  .content .container{
    position: relative;
    width: 34.05rem;
    padding-top: 0;
    margin: 0 auto;
  }
  .content .container .show-us{
    padding-top: 1.5rem;
    font-size: 0;
  }
  .content .container .show-us .item-left{
    display: inline-block;
    width: 49.5%;
    vertical-align: middle;
  }
  .content .container .show-us .item-left img{
    width: 14.65rem;
  }
  .content .container .show-us .item-right{
    display: inline-block;
    width: 49.5%;
    vertical-align: middle;
  }
  .content .container .show-us .item-right p{
    padding: 0 2.15rem 0 1.175rem;
    line-height:1.25rem;
    color: #333;
    font-size: 0.45rem;
    text-indent: 2em;
    font-weight: 100;
  }

</style>
