<template>
  <div class="container">
    
  </div>
</template>

<script>

export default {
  created:function(){
      this.$router.push('/list'); // 页面加载时跳转
    }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  html,body,#__nuxt,#__layout,#__layout>div,.container{
    width: 100%;
    height: 100%;
  }
  
</style>
