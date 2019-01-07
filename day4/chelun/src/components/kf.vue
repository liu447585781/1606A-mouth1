<template>
    <div class="boxs">
        <div class="kf" @click="btn">
            <img src="https://h5.chelun.com/2017/update-licence2-pay/img/cc-icon.png" alt="">
        </div>
        <div class="b-box" v-show="flag">
            <button id="cc" @click="btn1">联系客服</button>
            <div class="tel" @click="btn2">
                <a href="tel:18510924327">电话联系</a>
            </div>
            <button @click="btn3">取消</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'kf',
  data(){
      return {
          flag:false
      }
  },
  methods:{
      btn(){
          this.flag=true;
      },
      btn1(){
          this.flag=false;
      },
      btn2(){
          this.flag=false;
      },
      btn3(){
          this.flag=false;
      }
  }
}
</script>

<style lang="scss" scoped>
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
  .b-box{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        button{
            width: 90%;
            height: 50px;
            position: absolute;
            bottom: 5px;
            border: none;
            border-radius: 5px;
            outline: none;
            &:first-child{
                bottom: 115px;
            }
        }
        .tel{
            width: 90%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #333;
            position: absolute;
            bottom:60px;
            display: inline-block;
            background: #fff;
            border-radius: 5px;
            a{
                width: 100%;
                height: 100%;
                display: inline-block;
            }
        }
    }
</style>
