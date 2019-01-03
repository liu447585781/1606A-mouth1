<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none; 
  }
  html,body,#app{
    width: 100%;
    height: 100%;
    background: #EEEEEE;
  }
</style>
