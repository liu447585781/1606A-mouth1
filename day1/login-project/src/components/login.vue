<template>
  <div class="login">
      <div class="header">
          <a href="javascript:history.back(-1)">&lt;</a>
          <span>手机号登录</span>
          <a href="javascript:;"></a>
      </div>
      <div class="body">
           <div class="sjh">
               <input type="text" placeholder="手机号">
           </div>
           <div class="mm">
                <input type="text" placeholder="密码">
           </div>
           <div class="dl">
               <button class="btn">登录</button>
           </div>
           <p>
               重设密码
           </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
        
    }
  }
}
</script>

<style scoped>
.login{
  width: 100%;
  height: 100%;
}
a{
    text-decoration: none;
    font-size: 20px;
    color: #fff;
}
span{
    padding-right: 20px;
    color: #fff;
}
p{
    text-align: center;
    line-height: 40px;
}
.header{
    height: 50px;
    background: #333;
    line-height: 50px;
    display: flex;justify-content: space-between;
    padding: 0 20px;
}
.body{
  width: 100%;
  
}
.dl{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.btn{
  width: 85%;
  border: solid 1px #333;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  background: #333;
  color: #636768;
  outline: none;
  margin-top: 30px;
  font-size: 18px;
}
.sjh{
    width: 100%;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.sjh input{
    padding-left: 50px;
    font-size: 16px;
    height: 100%;
    width: 75%;
    border: none;
    border-bottom: solid 1px #333;
    outline: none;
    background: url('../../static/images/iphone.png') no-repeat 10px center;
    background-size: 23px 29px;
}
.mm{
    width: 100%;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.mm input{
    padding-left: 50px;
    font-size: 16px;
    height: 100%;
    width: 75%;
    border: none;
    border-bottom: solid 1px #333;
    outline: none;
    background: url('../../static/images/suo.png') no-repeat 10px center;
    background-size: 23px 29px;
}
</style>
