<template>
  <div class="body">
    <div class="top">
        <div class="tab">
            <p class="tab-p">个性推荐</p>
            <p class="tab-p">主播电台</p>
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
  </div>
</template>

<script>
import Swiper from '../components/swiper'

export default {
  name: 'Body',
  components:{
      Swiper
  }
}
</script>

<style scoped >
    .body{
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
        padding: 0 30px;
    }
    .nav{
        margin-top: 50px;
        display: flex;
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
</style>
