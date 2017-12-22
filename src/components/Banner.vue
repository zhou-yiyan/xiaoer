<template>
    <div class="banner" :style="{backgroundImage:bannerMessage.backgroundImageUrl}">
      <h1>{{bannerMessage.h1}}</h1>
      <h4>{{bannerMessage.h4}}</h4>
      <h4 v-if="bannerMessage.otherText!==undefined">{{bannerMessage.otherText}}</h4>
    </div>
</template>

<script type="text/ecmascript-6">
  export default{
      props: {
        bannerMessage:{type:Object},
      }
    }
</script>

<style scoped>
  .banner{
    background-position: left;
    background-size:cover;
    background-repeat:no-repeat;
    color: #fff;
    height: 11.025rem;
    text-align: center;
    min-width: 34.05rem;
  }
  .banner h1{
    margin: 0;
    padding: 4rem 0 0;
    font-size:1.45rem;
    line-height: 1.45rem;
    font-weight: 400;
  }
  .banner h4{
    padding-top: 0.4rem;
    font-size: 0.8rem;
    line-height:0.8rem;
    font-weight: 100;
  }
</style>
