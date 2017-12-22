<template>
  <div class="content">
    <!--轮播图组件-bootstrap-->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- 圆点区域 -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      </ol>
      <!-- 轮播图区域 -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="banner1"></div>
          <div class="carousel-caption">
          </div>
        </div>
        <div class="item">
          <div class="banner2"></div>
          <div class="carousel-caption">
          </div>
        </div>
      </div>
    </div>
    <!--跳转盒子-->
    <div class="other-big-box">
      <ul class="other-list container">
        <!--跳转盒子动态渲染-->
        <a v-for="(item,index) in linkList" :href="item.href">
          <li
            :style="item.backGroundColor"
            @mouseenter="enter"
            @mouseleave="leave">
            <div class="item-title">{{item.name}}</div>
            <div class="item-text">{{item.text}}</div>
            <div class="item-link">{{item.link}}</div>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import myNav from '../components/nav'
  export default{
    created(){
      this.$http.get('api/home-linkList').then((res)=> {
        this.linkList = res.data
      }, (err)=> {
        console.log(err);
      })
    },
    data(){
      return {
        linkList: [],
      }
    },
    methods: {
      enter(event){
        event.target.style.top = -0.4 + 'rem'
      },
      leave(event){
        event.target.style.top = 0
      },
    },
    components: {
      myNav
    }
  }
</script>
<style scoped>

  .content {
    position: relative;
  }

  /*背景图片区域*/
  .content .carousel .carousel-inner .banner1 {
    background: url("../assets/images/home/index-banner-01.png");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 23.975rem;
    min-width: 34.05rem;
  }

  .content .carousel .carousel-inner .banner2 {
    background: url("../assets/images/home/index-banner-02.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 23.975rem;
    min-width: 34.05rem;
  }

  /*控制区域*/
  .content .carousel-indicators {
    bottom: 10px;
  }

  .content .carousel-indicators > li {
    background-color: #fff;
    width: 8px;
    height: 8px;
    margin: 0;
    margin-left: 8px;
    border: none;
  }

  .content .carousel-indicators .active {
    background-color: #c5e52e;
    width: 8px;
    height: 8px;
    margin: 0;
    margin-left: 8px;
  }

  /*跳转盒子*/
  .content .other-big-box {
    width: 100%;
    position: absolute;
    bottom: 1.2rem;
    min-width: 34.05rem;
  }

  .content .other-list {
    width: 35rem;
    min-width: 34.05rem;
  }

  .content .other-list li {
    position: relative;
    top: 0;
    float: left;
    width: 8rem;
    height: 4.275rem;
    padding-left: 0.45rem;
    padding-top: 0.65rem;
    margin-right: 0.35rem;
    color: #fff;
    transition: all 0.3s;
  }

  .content .other-list li:nth-of-type(1) {
    background-color: #00cc67;
  }

  .content .other-list li:nth-of-type(2) {
    background-color: #3276a3;
  }

  .content .other-list li:nth-of-type(3) {
    background-color: #97bd3c;
  }

  .content .other-list li:nth-of-type(4) {
    background-color: #1e6897;
  }

  .content .other-list li > .item-title {
    font-size: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .content .other-list li > .item-text {
    margin-bottom: 1rem;
    font-size: 0.4rem;
  }

  .content .other-list li > .item-link {
    position: absolute;
    left: 0.45rem;
    bottom: 0.6rem;
    font-size: 0.4rem;
    padding: 0.1rem 0.3rem 0.1rem 0.45rem;
    border: 1px solid #fff;
    border-radius: 999rem;
    color: #fff;
    line-height: 0.4rem;

  }
</style>
