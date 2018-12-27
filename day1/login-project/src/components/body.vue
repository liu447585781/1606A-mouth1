<template>
  <div class="body">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Body'
}
</script>

<style scoped >
    .body{
        flex: 1;
        overflow-y: auto;
    }
</style>
