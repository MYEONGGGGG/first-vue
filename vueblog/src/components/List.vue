<template>
  <div v-for="data in blogData" :key="data">
    <h5><router-link :to="`/detail/${data.number}`">{{ data.title }}</router-link></h5>
    <p>{{ data.date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",

  props: {
    blogData: Array,
  },
}
</script>

<style scoped>

</style>