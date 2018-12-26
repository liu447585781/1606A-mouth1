<template>
  <div class="footer">
      <dl @click='btn1'>
          <dt><img src="../../static/images/1.png" alt=""></dt>
          <dd>发现</dd>
      </dl>
      <dl @click='btn2'>
          <dt><img src="../../static/images/2.png" alt=""></dt>
          <dd>视频</dd>
      </dl>
      <dl @click='btn3'>
          <dt><img src="../../static/images/3.png" alt=""></dt>
          <dd>我的</dd>
      </dl>
      <dl @click='btn4'>
          <dt><img src="../../static/images/4.png" alt=""></dt>
          <dd>朋友</dd>
      </dl>
      <dl @click='btn5'>
          <dt><img src="../../static/images/5.png" alt=""></dt>
          <dd>账号</dd>
      </dl>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods:{
      btn1(){
          this.$router.push({path:'/index'})
      },
      btn2(){
          this.$router.push({path:'/video'})
      },
      btn3(){
          this.$router.push({path:'/my'})
      },
      btn4(){
          this.$router.push({path:'/friend'})
      },
      btn5(){
          this.$router.push({path:'/number'})
      }
  }
}
</script>

<style scoped>
    .footer{
        overflow: hidden;
        height: 50px;
        border-top: 1px #ccc solid;
        display: flex;
    }
    dl{
        width: 20%;
    }
    dt{
        padding-top: 5px;
        height: 22px;
        width: 22px;
        margin: 0 auto;
    }
    dl img{
        width: 100%;
        height: 100%;
    }
    dd{
        text-align: center;
        font-size: 12px;
        line-height: 24px;
    }
</style>
