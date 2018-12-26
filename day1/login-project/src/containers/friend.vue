<template>
  <div class="friend">
      <div class="body">
        this is friend
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/footer'

export default {
  name: 'Friend',
  components:{
    Footer
  }
}
</script>

<style scoped>
  .friend{
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
