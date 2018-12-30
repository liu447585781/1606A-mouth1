<template>
  <div class="accountMsgItem">
    <div class="accountMsgItemCont">
      <div class="msgIcon">
        <i class="icon iconfont icon-xiaoxi"><img src="../../static/images/yx.png" alt=""></i>
      </div>
      <div class="msgCont" :class="hasBorBot?'bor_bot':''">
        <span class="msgText">{{text}}</span>
        <span class="goToIcon">
          <i class="icon iconfont icon-chevron-thin-right"><img src="../../static/images/right.png" alt=""></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "accountMsgItem",
  data() {
    return {};
  },
  props: ["text", "hasBorBot"]
};
</script>
<style>
.accountMsgItem {
  width: 100%;
  height: 46px;
  line-height: 46px;
}
.accountMsgItemCont {
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
}
.msgIcon {
  width: 46px;
  height: 46px;
  text-align: center;
}
.msgCont {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  
}
.msgCont.bor_bot {
  border-bottom: 1px solid #eee;
}
.accountShop{
  border-bottom: solid 10px #EEEFF0;
}
.icon{
  height: 16px;
  width: 16px;
  display: inline-block;
}
.icon img{
  width: 100%;
  height: 100%;
}
</style>
