<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
  components: {
    ListItem
  },

  // 분기처리 전
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>
</style>