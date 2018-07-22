<template>
  <div id="app" class="viewport">
    <serve-header></serve-header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ServeHeader from './components/Header'
export default {
  name: 'App',
  components:{
    ServeHeader
  },
  created(){
        axios.get('/repairList.json')
        .then(res=>{
          var result = res.data;
          var pizzaOriginal = [];
          for(var k in result){
            result[k].id = k;
            pizzaOriginal.push(result[k]);
          }
          // this.pizzaList = pizzaOriginal
          this.$store.commit('repairList',pizzaOriginal);
        })
      }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
