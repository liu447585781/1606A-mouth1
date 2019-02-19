<template>
  <div class="counter-warp">
    <div class="scroll">
      <i-icon type="search" size="26" class="l-icon" color="#333" />
      <scroll-view class="scroll-view" scroll-x style="width: 100%">
        <p id="green" v-for="(val,index) in channels" :key="index" class="scroll-view-item" :class="flag==index?'active':''" @click="btn(index,val.appUrl)">
          {{val.name}}
        </p>
      </scroll-view>
      <i-icon type="add" size="26" class="r-icon" color="#333"/>
      <i-icon type="mine" size="26" class="r-icon" color="#333" />
    </div>
    <!-- <div class="list">
      <p v-for="(item, index) in newsList" :key="index">{{item.content.title}}</p>
    </div> -->
    <news-list :list="newsList"></news-list>
    <p :class="{refresh:true, active:isRefresh}" @click="refreshPage">
       <img src="../../assets/refresh.png">
    </p>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts">
</script>


<style lang="less">
  @import "./index";
  .scroll{
    height: 88rpx;
    line-height: 88rpx;
    border-bottom: 1rpx #ccc solid;
    display: flex;
    padding: 0 26rpx;
  }
  .scroll-view{
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    overflow: hidden;
    white-space: nowrap;
  }
  .scroll-view-item{
    width: 95rpx;
    text-align: center;
    padding: 8rpx 0;
    display: inline;
    margin: 0 12rpx;
    font-size: 30rpx;
  }
  .active{
    border-bottom: solid #D43D3D 6rpx;
    color: #D43D3D;
  }
  .l-icon{
    padding-right: 16rpx;
  }
  .r-icon{
    padding-left: 30rpx;
  }
  .refresh{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 50rpx;
    right: 20rpx;
    background: #fff;
    border-radius: 50%;
    padding: 15rpx;
    border: 1px solid #eee;
    box-shadow: 0 0 3px 1px #c0c0c0;
    img{
      width: 60rpx;
      height: 60rpx;
    }
  }
  .refresh.active{
    animation: rotateD .8s linear infinite;
  }
  @keyframes rotateD {
    0%{
      transform: rotate(0)
    }
    100%{
      transform: rotate(360deg)
    }
  }
</style>
