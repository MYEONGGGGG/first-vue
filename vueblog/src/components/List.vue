<template>
  <div v-for="(data, i) in blogData" :key="i">
    <!--
      $route: 현재 경로
      $router: 페이지 이동관련 기능
    -->
    <!-- click event -->
    <h5 @click="$router.push('/detail/'+i)">{{ data.title }}</h5>

    <!-- router-link #1 -->
<!--    <h5><router-link :to="`/detail/${data.number}`">{{ data.title }}</router-link></h5>-->

    <!-- router-link #2 -->
<!--    <h5><router-link :to="{ path: '/detail/' + i }">{{ data.title }}</router-link></h5>-->
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