<template>
  <div>
    <h4>{{ blogData[$route.params.id].title }}</h4>
    <h5>{{ blogData[$route.params.id].content }}</h5>
    <p>{{ blogData[$route.params.id].date }}</p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    blogData: Array,
  },
}
</script>

<style scoped>

</style>