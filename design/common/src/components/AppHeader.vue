<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  // 일반적인 props 선언 방법
  // props: ['title'],

  // props validation 문법을 이용한 props 선언 방법(유효성 검사)
  props: {
    title: String,
  },
}
</script>

<style scoped>

</style>