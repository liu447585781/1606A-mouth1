<template>
  <div class="hello">
    <div class="header">
      <img src="../../static/images/background.png" alt="">
    </div>
    <div class="body">
        <button class="btn" @click="btn">手机号登录</button>
        <button class="btn">注册</button>
        <u>游客试用</u>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    btn(){
      this.$router.push({path:'/number/login'})
    }
  }
}
</script>

<style scoped>
.hello{
  width: 100%;
}
.hello img{
  width: 100%;
}
.body{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.btn{
  width: 80%;
  border: solid 1px red;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  background: #fff;
  color: red;
  outline: none;
  margin-bottom: 25px;
  font-size: 18px;
}
u{
  width: 100%;
  text-align: center;
}
</style>
