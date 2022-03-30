<template>
  <div>
    <post-view v-for="(data, i) in inData" :key="i" :inData="inData[i]"/>
  </div>
</template>

<script>
import PostView from "@/components/PostView";
export default {
  name: "ContainerView",
  props: {
    inData: Array
  },
  components: {
    PostView,
  },
}
</script>

<style scoped>

</style>