<!-- 这是一个原生vue单文件 -->
<template>
  <div>
    <p class="card">
      {{text}}
    </p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data(){
    return {
      msg: 'hello card'
    }
  },
  mounted() {
    console.log(111)
  },

  created() {
    console.log('created...')
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
