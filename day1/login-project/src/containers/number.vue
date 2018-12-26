<template>
  <div class="number">
      <Hello/>
      <router-view/>
  </div>
</template>

<script>
import Footer from '../components/footer'
import Hello from '../components/HelloWorld'

export default {
  name: 'Number',
  components:{
    Footer,
    Hello
  }
}
</script>

<style scoped>
  .number{
    width: 100%;
    height: 100%;
  }
</style>
