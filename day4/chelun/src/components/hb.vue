<template>
    <div class="boxs">
        <div class="kf" @click="btn">
            <img src="../assets/ee-icon.png" alt="">
        </div>
        <div class="b-box" v-show="flag">
            <div class="b-b-box">
                <h3>发红包了</h3>
                <img src="../assets/coupon.png" alt="">
                <div class="btn">
                    <button @click="btn1">残忍拒绝</button>
                    <button @click="btn2">分享一下</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {goShare} from '../api/index'

export default {
  name: 'kf',
  data(){
      return {
          flag:false
      }
  },
   created() {
    window["CHELUN_SHARE_DATA_WXTIMELINE"] = {
      title: "车轮领红包",
      link:
        "https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN",
      imgUrl:
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0A/0F/ChMkJltFaI2IbS33ABABY7G9_SQAApmOgH8fkQAEAF7570.jpg",
      type: "photo"
    };
    window["CHELUN_SHARE_DATA_WXMESSAGE"] = {
      title: "快来领取车轮红包啦",
      desc: "微信分享官方文档",
      link:
        "https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN",
      imgUrl:
        "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0A/0F/ChMkJltFaI2IbS33ABABY7G9_SQAApmOgH8fkQAEAF7570.jpg"
    };
  },
  methods:{
      btn(){
          this.flag=true;
      },
      btn1(){
          this.flag=false;
      },
      btn2(){
          goShare();
          this.flag=false;
      }
  }
}
</script>

<style lang="scss" scoped>
    .kf{
    position: fixed;
    right: 20px;
    bottom: 140px;
    width: 60px;
    height: 60px;
  }
  .kf img{
    width: 100%;
    height: 100%;
  }
  .b-box{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .b-b-box{
        width: 90%;
        background: #fff;
        margin:  0 auto;
        margin-top: 30%;
    }
    .b-b-box h3{
        text-align: center;
        height: 40px;
        line-height: 40px;
    }
    .b-b-box img{
        width: 100%;
    }
    .btn{
        display: flex;
    } 
    .btn button{
        width: 50%;
        height: 50px;
        border: none;
        outline: none;
        background: #efefef;
        color: #ccc;
        border: 1px solid #ccc;
    }
    .btn button:nth-child(2){
        background: red;
        color: #fff;
    }
</style>
