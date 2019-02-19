<template>
    <div class="twos">
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
            <b>谎言从这里开始<br/><span>step 1：选择一句最适合你的<p>谎话</p></span></b>
            </div>
            <div class="one">
            <b>1 每天吃饭绝不重样，饿了就点美团外卖</b>
            </div>
            <div class="two">
            <b>2 下班回家亲自下厨，周一红烧牛肉，周二老坛酸菜</b>
            </div>
            <div class="three">
            <b>3 知道熬夜伤身，所以我只通宵</b>
            </div>
            <div class="btn">
                换一换
            </div>
        </div>
    </div>
</template>

<style scoped>
  .twos{
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
  .first b span{
      font-size: 24px;
  }
  .first b span p{
    display: inline-block;
    border-bottom: 4px solid #FED59E;
  }
  .one{
    position: absolute;
    left: 25px;
    top: 162px;
    width: 80%;
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
    width: 80%;
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
    width: 80%;
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
    border-radius: 1px;
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