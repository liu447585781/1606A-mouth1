<template>
  <div class="list">
    <div v-for="(item, index) in list" :key="index" class="item" v-if="item.content.title" @click='go(item.content.display_url)'>
      <div>
        <p class="title">{{item.content.title}}</p>
        <div class="gallery">
          <img :src="value.url" mode="widthFix" v-for="(value, key) in item.content.image_list" :key="key">
        </div>
        <p class="media">
          <span class="hot" v-if="item.content.hot">热</span>
          <span class="media-name">{{item.content.media_name}}</span>
          <span class="comment">{{item.content.comment_count}}评价</span>
          <span @click.stop="removeNews(item.content.item_id)">X</span>
        </p>
      </div>
      <img class="middle-image" mode="widthFix" :src="item.content.middle_image.url" v-if="!item.content.image_list && item.content.middle_image">
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
.list{
  width: 100%;
  padding: 0 20rpx;
  box-sizing: border-box;
}
.item{
  padding: 25rpx 0;
  border-bottom: 1rpx solid #ccc;
  display: flex;
  justify-content: space-between;
  .middle-image{
    width: 45%;
    padding-left: 10rpx;
  }
  &>div{
    width: 100%;
  }
}
.item:last-child{
  border-bottom: none;
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 34rpx;
  color: #000;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.gallery{
  margin: 10rpx 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img:nth-child(2){
    margin: 0 10rpx;
  }
}
.media{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rpx;
  span{
    font-size: 28rpx;
    color: #999;
  }
  .hot{
    color: red;
    border-radius: 5rpx;
    line-height: 28rpx;
    vertical-align: middle;
    font-size: 20rpx;
    padding: 0 5rpx;
    border: 1rpx solid red;
  }
  .comment{
    flex: 1
  }
  span:first-child,.media-name{
    margin-right: 15rpx;
  }
  span:last-child{
    font-size: 20rpx;
    border: 1px solid #999;
    border-radius: 15rpx;
    padding: 0 15rpx;
  }
}
</style>
