<template>
  <div class="hello">
    <div class="left">
        <img src="../../static/imgs/left.png" alt="">
    </div>
    <div class="right">
        <img src="../../static/imgs/right.png" alt="">
    </div>
    <div>
      <div class="logo">
        <img src="../../static/imgs/logo.png" alt="">
    </div>
    <div class="first">
      <b>春节回家每日一谎<br/><p>步骤</p></b>
    </div>
    <div class="one">
      <b>Step 1</b>
      <b><p>选择</p>贴心谎话</b>
    </div>
    <div class="two">
      <b>Step 2</b>
      <b><p>选择</p>谎话背景图</b>
    </div>
    <div class="three">
      <b>Step 3</b>
      <b><p>生成</p>谎话海报，领取免费春节“治”人攻略</b>
    </div>
    <div class="btn">
      开始制作
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .hello{
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../../static/imgs/bg.png') no-repeat ;
    background-size: 100% 100%;
  }
  .left{
    position: absolute;
    left: 15px;
    top: 17px;
    height: 37px;
    width: 37px;
  }
  .left img{
    width: 100%;
    height: 100%;
  }
  .right{
    position: absolute;
    right: 15px;
    top: 17px;
    height: 37px;
    width: 37px;
  }
  .right img{
    width: 100%;
    height: 100%;
  }
  .logo{
    position: absolute;
    left: 25px;
    top: 29px;
    height: 58px;
    width: 50px;
  }
  .logo img{
    width: 100%;
    height: 100%;
  }
  .first{
    position: absolute;
    right: 25px;
    top: 39px;
  }
  .first b{
    display: inline-block;
    font-family: AliHYAiHei;
    font-size: 30px;
    color: #FED59E;
    text-align: right;
  }
  .first b p{
    display: inline-block;
    border-bottom: 4px solid #FED59E;
  }
  .one{
    position: absolute;
    left: 25px;
    top: 152px;
  }
  .one b{
    display: block;
    font-family: AliHYAiHei;
    font-size: 18px;
    color: #FFFFFF;
    text-align: left;
  }
  .one b p{
    display: inline-block;
    border-bottom: 2px solid #fff;
  }
  .two{
    position: absolute;
    left: 25px;
    top: 245px;
  }
  .two b{
    display: block;
    font-family: AliHYAiHei;
    font-size: 18px;
    color: #FFFFFF;
    text-align: left;
  }
  .two b p{
    display: inline-block;
    border-bottom: 2px solid #fff;
  }
  .three{
    position: absolute;
    left: 25px;
    top: 340px;
  }
  .three b{
    display: block;
    font-family: AliHYAiHei;
    font-size: 18px;
    color: #FFFFFF;
    text-align: left;
  }
  .three b p{
    display: inline-block;
    border-bottom: 2px solid #fff;
  }
  .btn{
    border: 1px solid #FFFFFF;
    border-radius: 12px;
    color: #fff;
    width: 130px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    position: absolute;
    top: 451px;
    left: 50%;
    margin-left: -65px;
    font-size: 16px;
  }
</style>

