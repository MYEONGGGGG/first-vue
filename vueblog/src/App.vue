<template>
  <nav-menu></nav-menu>
  <router-view :blogData="blogData"></router-view>
</template>

<script>
import blog from "@/assets/blog";
import NavMenu from "@/components/NavMenu";

export default {
  name: 'App',
  data() {
    return {
      blogData: blog,
    }
  },
  components: {
    NavMenu,
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
}
</style>
