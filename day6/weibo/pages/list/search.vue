<template>
  <div class="search">
      <p @click="back">this is search</p>
  </div>
</template>

<script>

export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
</style>
