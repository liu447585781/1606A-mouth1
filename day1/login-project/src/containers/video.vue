<template>
  <div class="video">
      <div class="body">
        this is video
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/footer'

export default {
  name: 'Video',
  components:{
    Footer
  }
}
</script>

<style scoped>
  .video{
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
