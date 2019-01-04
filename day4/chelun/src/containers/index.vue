<template>
  <div id="index">
    <div class="body">
      <div class="tj">
      <ul>
        <li>订单提交</li>
        <li>填写收货地址</li>
        <li>正在办理</li>
        <li>办理成功</li>
      </ul>
    </div>
    <div class="banner">
        <img src="https://h5.chelun.com/2017/update-licence2-pay/img/banner@3x.png" alt="">
    </div>
    <Upload/>
    <CityPicker />
    <div class="yh">
      优惠<span>登录后查看优惠券 <i><img src="http://bpic.588ku.com/element_origin_min_pic/01/39/54/34573cc50a9516c.jpg" alt=""></i></span>
      <a href="javascript:;">常见问题？</a>
    </div>
    </div>
    <div class="footer">
      实付：<span>￥399</span> <b @click="click">立刻支付</b>
    </div>
    <div class="kf">
      <img src="https://h5.chelun.com/2017/update-licence2-pay/img/cc-icon.png" alt="">
    </div>
    <!-- <van-picker :columns="columns" @change="onChange" /> -->
    
  </div>
</template>

<script>
import Upload from '../components/upload'
import CityPicker from '../components/cityPicker'
import {isVip,goPay} from '../api/index';

export default {
  name: 'Index',
  components:{
    Upload,
    CityPicker
  },
  methods:{
    click(){
      goPay();
    }
  },
  mounted(){
    isVip().then(res=>{
      console.log('isVip...',res)
    })
  }
}
</script>

<style>
.tk{
  position: absolute;
  top: 50px;
  z-index: 99;
  right: 10px;
}
  #index{
    width: 100%;
    height: 100%;
    background: #EEEEEE;
  }
  #index{
    display: flex;
    flex-flow: column;
  }
  .body{
    flex: 1;
    overflow-y: auto;
  }
  .tj{
    width: 100%;
    height: 45px;
    line-height: 45px;
    overflow: hidden;
  }
  .tj>ul{
    display: flex;
  }
  .tj>ul>li{
    position: relative;
    width: 25%;
    text-align: center;
    font-size: 14px;
    color: #3AAFFE;
    background: #fff;
  }
  .tj>ul>li::before{
    content: '';
    display: block;
    position: absolute;
    border-top: 23px solid #eee;
    border-bottom: 23px solid #eee;
    border-left: 8px solid #fff;
    border-right: 1px solid #eee;
    height: 0;
    top: -1.6px;
    right: 0;
    z-index: 1;
    font-size: 0;
}
  .tj>ul>li::after{
    content: '';
    display: block;
    position: absolute;
    border-top: 23px solid #fff;
    border-bottom: 23px solid #fff;
    border-left: 8px solid transparent;
    border-right: 1px solid #fff;
    top: -1.6px;
    right: -1px;
    z-index: 2;
}
.tj>ul>li:first-child::after{
  border-left: 8px solid #3AAFFE;
}
.tj>ul>li:nth-child(2)::before{
  right: -9px;
}
.tj>ul>li:nth-child(2)::after{
  right: -10px;
}
  .tj>ul>li:first-child{
    background: #3AAFFE;
    color: #fff;
  }
  .banner{
    width: 100%;
    background: #fff;
  }
  .banner img{
    width: 100%;
  }
  .type{
    margin: 11px 0;
    background: #fff;
  }
  .type>ol>li{
    position: relative;
    flex: 1;
    height: 50px;
    line-height: 50px;
    font-size:16px;
    margin-left: 20px; 
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .type ol li span{
    position: absolute;
    right: 20px;
  }
  .type ol li em{
    width: 14px;
    height: 14px;
    display: inline-block;
  }
  .type ol li em img{
    width: 100%;
    height: 100%;
  }
  .type ol li i{
    width: 14px;
    height: 14px;
    display: inline-block;
  }
  .type ol li i img{
    width: 100%;
    height: 100%;
  }
  .type ol li:last-child span{
    color: red;
  }
  .hui{
    color: #A9A9A9;
  }
  .yh{
    position: relative;
    height: 50px;
    flex: 1;
    padding-left: 20px; 
    line-height: 50px;
    font-size: 16px;
    background: #fff;
  }
  .yh span{
    position: absolute;
    right: 20px;
  }
  .yh span i{
    width: 14px;
    height: 14px;
    display: inline-block;
  }
  .yh span i img{
    width: 100%;
    height: 100%;
  }
  .yh a{
    display: block;
    text-align: center;
  }
  .footer{
    position: relative;
    height: 50px;
    background: #fff;
    font-size: 16px;
    line-height: 50px;
    padding-left: 20px;
  }
  .footer span{
    color: red;
  }
  .footer b{
    position: absolute;
    right: 0;
    height: 100%;
    width: 100px;
    background: #999999;
    color: #fff;
    text-align: center;
    font-weight: normal;
  }
  .kf{
    position: fixed;
    right: 20px;
    bottom: 60px;
    width: 60px;
    height: 60px;
  }
  .kf img{
    width: 100%;
    height: 100%;
  }
</style>
