<template>
  <div class="hello">
    <button @click="btn('+')">+</button>
    <p>{{this.$store.state.app.num}}</p>
    <button @click="btn('-')">-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted(){
    console.log(this.$store)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    btn(type){
      this.$store.commit('btn',{payload:type})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 30px;
  display: flex;
}
button,p{
  margin: 0;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  width: 30px;
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
