<template>
    <div class="box" @click="shows">
        <img src="../assets/licence.png" alt="">
    </div>
</template>

<script>

export default {
  name: 'Box',
  methods:{
      shows(){
          this.$emit('shows',false)
      }
  }
}
</script>

<style lang="scss" scoped>
    .box{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        img{
            margin-top: 40%;
            width: 80%;
            height: 25%;
        }
    }
</style>
