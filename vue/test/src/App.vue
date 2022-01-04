<template>
  <div>
    <strong>{{products[0]}}</strong>
    <p>{{ price1 }}</p>
  </div>  
  <div>
    <strong>{{products[1]}}</strong>
    <p>{{ price2 }}</p>
  </div>
  <div>
    <strong>{{products[2]}}</strong>
    <p>{{ price1 }}</p>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      price1 : 10,
      price2 : 30,
      products : ['세종시', '수원시', '대전시'],
    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
