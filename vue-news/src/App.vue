<template>
  <div id="app">
    <!-- index.js: url 에 해당하는 router view 를 불러온다. -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    //
  },
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
