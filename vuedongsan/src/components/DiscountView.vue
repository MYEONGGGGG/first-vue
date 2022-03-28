<template>
  <div class="discount">
    <h4>지금 결제하면 {{ data }}% 할인!</h4>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style scoped>
.discount {
  background: #eee;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
}
</style>