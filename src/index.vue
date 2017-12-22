<template>
  <div>
    <my-nav></my-nav>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <!--底部-->
    <div class="footer container-fluid">
      <!--底部版心-->
      <div class="container">
        <!--底部导航-->
        <div class="sub-nav">
          <div v-for="(item,index) in navList"><a :href="item.href">{{item.name}}</a></div>
        </div>
        <!--底部公司信息-->
        <div class="name">{{companyInfo.name}}</div>
        <div class="address">
          <span>{{companyInfo.phoneNumber}}</span>
          <span>{{companyInfo.email}}</span>
          <span v-html="companyInfo.sinaBlog"></span>
        </div>
        <div class="address">
          <span>{{companyInfo.address}}</span>
          <span>{{companyInfo.postCode}}</span>
        </div>
        <div class="copyright">
          {{companyInfo.copyRight}}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myNav from './components/nav.vue'
  export default{
    created() {
      //获取导航列表数据和公司信息
      this.$http.get('api/layout-navList').then((res) => {
        this.navList = res.data
      }, (err) => {
        console.log(err)
      })
      this.$http.get('api/layout-companyInfo').then((res)=>{
        this.companyInfo = res.data
      },(err)=>{console.log(err)})
    },
    components:{
      myNav
    },
    data(){
      return {
//        底部导航列表数据
        navList:[],
//        底部公司信息
        companyInfo:{}
      }
    }
  }
</script>

<style>
  @media screen and (max-width: 1600px) {
    html {
      font-size: 30px !important;
    }
  }

  @media screen and (max-width: 1400px) {
    html {
      font-size: 25px !important;
    }
  }

  @media screen and (max-width: 14rem) {
    html {
      font-size: 20px !important;
    }
  }

  * {
    text-decoration: none;
    list-style: none;
  }
  html {
    font-size: 40px;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  body{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

  }
  p{
    font-weight: 100;
  }
  /*底部样式*/
  .footer {
    background-color: #f5f5f5;
    min-width: 34.05rem;
    height: 100%;
  }

  /*底部版心*/
  .footer .container {
    width: 34.05rem;
    font-size: 0.4rem;
    color: #767676;
  }

  /*底部导航*/
  .footer .container .sub-nav > div {
    float: left;
    text-align: center;
    padding-top: 0.75rem;
    height: 2.45rem;
  }

  .footer .container .sub-nav > div > a {
    padding: 0 0.25rem;
    color: #767676;
    border-right: 1px solid #767676;
  }

  .footer .container .sub-nav > div > a:hover {
    text-decoration: none;
  }

  .footer .container .sub-nav > div > a:visited {
    text-decoration: none;
  }

  .footer .container .sub-nav > div:first-child > a {
    padding-left: 0;
  }

  .footer .container .sub-nav > div:last-child > a {
    border: none;
  }

  /*底部公司名*/
  .footer .container .name {
    clear: both;
    margin-bottom: 0.7rem;
  }

  .footer .container .address {
    margin-bottom: 0.7rem;
  }

  .footer .container .address > span {
    padding-right: 1rem;
  }

  .footer .container .address > span > a {
    color: #767676;
    text-decoration: none;
  }

  /*底部copyright*/
  .footer .container .copyright {
    margin-top: 0.925rem;
    padding: 0.65rem 0 0.75rem;
    border-top: 1px solid #dbdbdb;
    box-sizing: border-box;
  }

/*子页面公共样式*/
  .content .container .history-us .history-us-row.history-us-tit{
    padding-left: 0.15rem;
    margin: 1.8rem 0 0.3rem;
    border-bottom-style:solid;
    font-size: 0.6rem;
    color:#333;

  }
  .container .history-us .history-us-row{
    border-bottom: 1px dashed #e9e9e9;
    color: #6a6a6a;
    font-size: 0.5rem;
    line-height: 1.9rem;
    font-weight: 100;
  }
  .container .history-us .history-us-row .list-tit{
    display: inline-block;
    width: 3.75rem;
    padding-left: 0.5rem;
    vertical-align: middle;

  }
  .container .history-us .history-us-row .list-icon{
    display: inline-block;
    width: 0.575rem;
    height: 0.175rem;
    background-image: url('assets/images/about/list-icon.svg');
    background-repeat: no-repeat;
    background-position: left;
    vertical-align: middle;
    background-size: cover;
  }
  .container .history-us .history-us-row .list-text{
    padding-left: 0.65rem;
    vertical-align: middle;

  }
</style>
