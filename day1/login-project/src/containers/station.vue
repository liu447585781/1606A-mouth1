<template>
  <div class="body2">
    <div class="top">
        <div class="tab">
            <p class="tab-p " @click='btn1'>个性推荐</p>
            <p class="tab-p active" @click='btn2'>主播电台</p>
        </div>
        <Swiper/>
    </div>
    <div class="nav">
        <dl>
            <dt><img src="../../static/images/sr.jpg" alt=""></dt>
            <dd>私人FM</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/mr.jpg" alt=""></dt>
            <dd>每日推荐</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/gd.jpg" alt=""></dt>
            <dd>歌单</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/ph.jpg" alt=""></dt>
            <dd>排行榜</dd>
        </dl>
    </div>
    <div class="h1">
        推荐歌单 &gt;
    </div>
    <div class="list">
        <dl>
            <dt><img src="../../static/images/nav.jpg" alt=""></dt>
            <dd>要做什么梦是每个人的自由</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/nav.jpg" alt=""></dt>
            <dd>要做什么梦是每个人的自由</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/nav.jpg" alt=""></dt>
            <dd>要做什么梦是每个人的自由</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/nav.jpg" alt=""></dt>
            <dd>要做什么梦是每个人的自由</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/nav.jpg" alt=""></dt>
            <dd>要做什么梦是每个人的自由</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/nav.jpg" alt=""></dt>
            <dd>要做什么梦是每个人的自由</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/nav.jpg" alt=""></dt>
            <dd>要做什么梦是每个人的自由</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/nav.jpg" alt=""></dt>
            <dd>要做什么梦是每个人的自由</dd>
        </dl>
        <dl>
            <dt><img src="../../static/images/nav.jpg" alt=""></dt>
            <dd>要做什么梦是每个人的自由</dd>
        </dl>
    </div>
  </div>
</template>

<script>
import Swiper from '../components/swiper'

export default {
  name: 'Body',
  components:{
      Swiper
  },
  methods:{
      btn1(){
          this.$router.push({path:'/index/recom'})
      },
      btn2(){
          this.$router.push({path:'/index/station'})
      }
  }
}
</script>

<style scoped >
    .active{
        border-bottom: 2px solid #fff;
    }
    .body2{
        flex: 1;
        overflow-y: auto;
    }
    .top{
        height: 150px;
        background: #333;
    }
    .tab{
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tab-p{
        color: #fff;
        padding: 10px 0;
        margin: 0 30px;
    }
    .nav{
        margin-top: 50px;
        display: flex;
        border-bottom: 1px solid #ccc;
        padding-bottom: 8px;
    }
    .nav dl{
        width: 25%;
    }
    .nav dl dt{
        height: 54px;
        width: 54px;
        margin: 0 auto;
    }
    .nav dl dt img{
        width: 100%;
        height: 100%;
    }
    .nav dl dd{
        text-align: center;
        line-height: 40px;
    }
    .h1{
        height: 50px;
        line-height: 50px;
        padding-left: 16px;
        font-size: 18px;
        font-weight: 600;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
    }
    .list dl{
        width: 30%;
        margin: 0 6px 20px;
    }
    .list dl dt{
        height: 120px;
        width: 100%;
        margin: 5px auto;
    }
    .list dl dt img{
        width: 100%;
        height: 100%;
    }
    .list dl dd{
        font-size: 14px;
    }
</style>
