<template>
    <div class="QR-code-box">
      <div class="container sub-tit-box">
        <p class="sub-tit">{{ subTit }}</p>
      </div>
      <div class="QR-code-item container">
        <div class="item-box" v-for="(item,index) in QRCodeList">
          <div class="item">
            <img :src="item.src">
            <p class="item-tit">{{item.itemTit}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
          return {
            subTit:'您可以使用移动端便捷用车',
            QRCodeList:[
              {
                src:require('../assets/images/two-dimension code/hour-qrcode-h5.png'),
                itemTit:'扫码用车'
              },
              {
                src:require('../assets/images/two-dimension code/hour-qrcode-app.png'),
                itemTit:'下载APP'
              },
              {
                src:require('../assets/images/two-dimension code/hour-qrcode-wx.png'),
                itemTit:'关注微信公众号'
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .QR-code-box{
    background-color: #fdfdfd;
    padding-top:1.55rem;
    width: 100%;
    min-width: 34.05rem;
  }
  .QR-code-box .sub-tit-box{
    text-align: center;
  }
  .QR-code-box .container{
    position: relative;
    width: 34.05rem;
    padding-top: 0;
    margin: 0 auto;
  }
  .QR-code-box .sub-tit-box .sub-tit{
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: #515151;
  }
  .QR-code-box .QR-code-item{
    font-size: 0;
    padding-top: 2.9rem;
    padding-bottom: 2.875rem;
    text-align: center;
  }
  .QR-code-box .QR-code-item .item-box{
    display: inline-block;
    width: 33.33%;
    font-size: 0;
    vertical-align: top;
  }
  .QR-code-box .QR-code-item .item-box .item img{
    margin: 0 auto 0.75rem;
    width: 5.25rem;
    height: 5.25rem;
  }
  .QR-code-box .QR-code-item .item-box .item p{
    font-size: 0.65rem;
    color: #333;
     }

</style>
