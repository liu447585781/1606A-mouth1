<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('./common/css/common.scss');

  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  html,body,#app{
    height: 100%;
    width: 100%;
  }
</style>
