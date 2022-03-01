<template>
  <div id="app">
<!--    <Toolbar></Toolbar>-->
    <tool-bar></tool-bar>

    <!-- index.js: url 에 해당하는 router view 를 불러온다. -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";

export default {
  name: 'App',
  components: {
    ToolBar
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
