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
        <div class="type">
      <ol>
        <li>联系省市<span class="hui" @click="btn">{{lxss.join(' ')}}</span></li>
        <li>详细地址<span><input type="text" name="" id=""></span></li>
        <li>练习电话<span><input type="text" placeholder="请输入联系人电话" name="" id=""></span></li>
        <li>联系人<span><input type="text" placeholder="请输入联系人" name="" id=""></span></li>
      </ol>
      <van-popup v-model="showCity" position="bottom">
        <van-picker :columns="cityColumns" show-toolbar title="选择联系省市"
          ref="cityPicker" @change="cityChange" @cancel="cityCancel" @confirm="cityConfirm"/>
      </van-popup>
    </div>
    <div>
      <!-- accept设置为*号会在客户端上卡顿，最好用逗号连接 -->
      <input type="file" accept="image/png,image/jpg,image/jpeg,image/gif" @change="uploadFile">
      上传图片
    </div>
    <canvas id="canvas"></canvas>
    </div>
    
    <div class="footer" @click="qr">
      确认
    </div>
    <Kf/>
    <Hb/>
  </div>
</template>

<script>
import Kf from '../components/kf'
import Hb from '../components/hb'
import { mapState, mapMutations, mapActions } from "vuex";
import {uploadBase64} from '../api/index';

export default {
  name: "Index",
  components:{
    Kf,
    Hb
  },
  data(){
    return {
      showCity:false,
      cityColumns: []
    }
  },
  created() {
    this.getCityList().then(res => {
      this.cityColumns = [
        {
          values: this.cityList.map(item => item.name)
        },
        {
          values: this.cityList[0].list.map(item => item.name)
        }
      ];
    });
  },
  computed: {
    ...mapState({
      cityList: state => state.cityPicker.cityList,
      lxss: state => state.cityPicker.lxss
    })
  },
  methods:{
    ...mapActions({
      getCityList: "cityPicker/getCityList",
    }),
    ...mapMutations({
      updateState: "cityPicker/updateState"
    }),
    btn(){
      this.showCity = true;      
    },
    cityCancel() {
      this.showCity = false;
    },
    cityConfirm(values) {
      this.updateState({ lxss: values });
      this.cityCancel();
    },
    cityChange(picker, values) {
      let index = this.cityList.findIndex(item => item.name == values[0]);
      this.$refs.cityPicker.setColumnValues(
        1,
        this.cityList[index].list.map(item => item.name)
      );
    },
    qr(){
      alert('成功')
    },
    uploadFile(e){
      console.log('file...', e.target.files[0].size);
      let file = e.target.files[0];
      // 先判断图片是否过大
      if (file.size > 30*1024){
        // 转成base64
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = res=>{
          console.log('res.result...', res.target.result);
          let img = new Image();
          img.src = res.target.result;
          img.onload = async ()=>{
            // 创建canvas进行压缩
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            // 第一种压缩，压缩画布大小
            context.drawImage(img, 0,0,img.width, img.height, 0,0, img.width, img.height);

            let base64 = canvas.toDataURL();
            let res = await uploadBase64(base64);
            console.log('res...', res);

            // 第二种压缩，压缩图片质量
            let base65 = canvas.toDataURL('image/jpeg', 0.1);
            let res2 = await uploadBase64(base65);
            console.log('res2...', res2);
          }
        }
      }
    }
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
    padding-left: 20px; 
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .type ol li span{
    position: absolute;
    right: 20px;
  }
  .type ol li span input{
    border: none;
    height: 80%;
    width: 100%;
    text-align: right;
  }
.footer{
  width: 100%;
    position: fixed;
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
