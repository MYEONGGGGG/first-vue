<template>
  <div id="app">
<!--    <Toolbar></Toolbar>-->
    <tool-bar></tool-bar>

    <transition name="page">
      <!-- index.js: url 에 해당하는 router view 를 불러온다. -->
      <router-view></router-view>
    </transition>
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
a {
  color: #34495e;
  text-decoration: none;
}
a.router-link_exact-active {
  text-decoration: underline;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
