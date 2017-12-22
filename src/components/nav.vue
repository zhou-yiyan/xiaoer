<template>
  <nav id="nav" class="header">
    <div class=" container-fluid">
      <!--logo区域-->
      <div class="col-xs-6 logo-box"></div>
      <!--导航区域-->
      <div class="nav-box" @mouseleave="leave">
        <router-link :to="{path:item.path}"
                     v-for="(item,index) in navList"
                     :key="index">
          <div
            class="col-xs-1"
            @mouseenter="enter"
            @click="click"
            :style="{color:navColor}">
            {{ item.name }}
          </div>
        </router-link>
        <!--导航滑块-->
        <div id="nav-bottom-line">
          <div class="line-box"></div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script type="text/ecmascript-6">
  export default{
    props:{
      navColor:{
        type:String,
      }
    },
    data(){
      return {
        navList: [
          {
            name: '首页',
            path: '/home'
          },
          {
            name: '分时用车',
            path: '/hour'
          },
          {
            name: '日租用车',
            path: '/day'
          },
          {
            name: '充电桩',
            path: '/charge'
          },
          {
            name: '关于我们',
            path: '/about'
          },
          {
            name: '商务合作',
            path: '/partner'
          }
        ],
        scrollTop: '',
        current: 0
      }
    },
    methods: {
//      鼠标进入导航事件
      enter(event) {
        let navBottomLine = document.getElementById('nav-bottom-line');
        navBottomLine.style.left = event.target.offsetLeft + 'px'
      },
//      鼠标离开导航事件
      leave(){
        let navBottomLine = document.getElementById('nav-bottom-line');
        navBottomLine.style.left = this.current + 'px'
      },
//      鼠标点击事件
      click(event){
        this.current = event.target.offsetLeft;
      },
//      监听屏幕滚动
      onScroll(){
        let nav = document.getElementById('nav');
        this.scrollTop = document.body.scrollTop;
        if (this.scrollTop > 0) {
          nav.style.backgroundColor = '#fff';
        } else if (this.scrollTop <= nav.offsetHeight) {
          nav.style.backgroundColor = '#fff';
        }
      }
//      监听是否超过导航条
    },
    mounted(){
      window.addEventListener('scroll', this.onScroll)
    }
  }
</script>

<style scoped>
  /*头部样式*/
  .header {
    border-bottom: 1px solid #ccc;
    height: 1.675rem;
    font-size: 0.45rem;
    text-align: center;
    min-width: 34.05rem;
    font-weight: 100;
    background-color: #fff;
    position: fixed;
    z-index: 2;
    width: 100%;
  }

  .header .nav-box {
    height: 100%;
    float: right;
    padding-right: 3rem;
    position: relative;
  }

  .header .nav-box div {
    list-style: none;
    width: 3.3rem;
    height: 100%;
    line-height: 1.675rem;
  }

  .header .nav-box div {
    color: #727472;
  }

  .header .nav-box div:hover {
    color: #00cc67;
    text-decoration: none;
    cursor: pointer;
  }

  .header .nav-box #nav-bottom-line {
    position: absolute;
    width: 3.3rem;
    transition: all 0.3s;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: transparent;
  }

  .header .nav-box #nav-bottom-line .line-box {
    margin: 0 auto;
    width: 2rem;
    height: 100%;
    border-bottom: 3px solid #00cc67;
  }
</style>
