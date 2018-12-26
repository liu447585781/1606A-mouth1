<template>
  <div class="index">
      <Header/>
      <Body/>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/footer'
import Body from '../components/body'
import Header from '../components/header'

export default {
  name: 'Index',
  components:{
      Footer,
      Body,
      Header
  }
}
</script>

<style scoped>
    .index{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
    }
</style>
