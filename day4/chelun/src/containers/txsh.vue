<template>
  <div id="index">
      <div class="tj">
        <ul>
            <li>订单提交</li>
            <li>填写收货地址</li>
            <li>正在办理</li>
            <li>办理成功</li>
        </ul>
    </div>
    <div class="sh">
        收货地址
    </div>
    <div class="body">

    </div>
    <div class="footer">
      确认
    </div>
    <Kf/>
  </div>
</template>

<script>
import Kf from '../components/kf'

export default {
  name: "Index",
  components:{
    Kf
  }
};
</script>

<style>
.tj {
  width: 100%;
  height: 45px;
  line-height: 45px;
  overflow: hidden;
}
.tj > ul {
  display: flex;
}
.tj > ul > li {
  position: relative;
  width: 25%;
  text-align: center;
  font-size: 14px;
  color: #3aaffe;
  background: #fff;
}
.tj > ul > li::before {
  content: "";
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
.tj > ul > li::after {
  content: "";
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
.tj > ul > li:nth-child(2)::after {
  border-left: 8px solid #3aaffe;
}
.tj > ul > li:nth-child(2)::before {
  right: -9px;
}
.tj > ul > li:nth-child(2)::after {
  right: -10px;
}
.tj > ul > li:nth-child(2) {
  background: #3aaffe;
  color: #fff;
}
.sh{
  line-height: 40px;
  height: 40px;
  text-align: center;
}
.body{
  height: 50px;
  background: #fff;
}
.footer{
  width: 100%;
    position: absolute;
    bottom: 0;
    height: 50px;
    background: #fff;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    background: #333;
    color: #fff;
  }
</style>
