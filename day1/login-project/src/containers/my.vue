<template>
  <div class="my">
      <div class="body">
        this is my
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/footer'

export default {
  name: 'My',
  components:{
    Footer
  }
}
</script>

<style scoped>
  .my{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
  }
  .body{
    flex: 1;
    overflow-y: auto;
  }
</style>
