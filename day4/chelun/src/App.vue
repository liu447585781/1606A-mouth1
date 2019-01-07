<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import JSBridge from './utils/JSBridge.js';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login(){
      JSBridge.invoke('app', 'login', {
        loginCallBackName: (res)=>{
          console.log('res...', res);
        }
      });
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
