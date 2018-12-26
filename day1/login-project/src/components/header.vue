<template>
  <div class="header">
    <span><img src="../../static/images/left.png" alt=""></span>
    <p><input type="text" placeholder="猜你喜欢 浮生"></p>
    <span><img src="../../static/images/right.jpg" alt=""></span>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
    .header{
        height: 50px;
        background: #333;
        display: flex;
        padding: 0 16px;
        align-items: center;
        justify-content: space-between;
    }
    span{
        width: 22px;
        height: 22px;
    }
    span img{
        width: 100%;
        height: 100%;
    }
    p{
        flex: 1;
        padding: 0 16px;
    }
    input{
        width: 100%;
        height: 30px;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 15px;
        background: #5B6161 url('../../static/images/ss.png') no-repeat 25% center;
        background-size: 18px 18px;
        color: #ccc;
    }
    ::-webkit-input-placeholder{
        color: #ccc;
    }
</style>
