<template>
  <div class="hello">
    <button @click="btn({payload:'+'})">+</button>
    <p>{{num}}</p>
    <button @click="btn({payload:'-'})">-</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
console.log(mapState)
export default {
  computed:{
    ...mapState({
      num:state=>state.app.num
    })
  },
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
    ...mapMutations({
      btn:'app/btn'
    }),
    ...mapActions({
      btns:'app/btns'
    }),
    btn(type){
      // this.$store.commit('app/btn',{payload:type})
      // this.$store.dispatch('app/btns',{payload:type})
      this.btns({payload:type})
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
