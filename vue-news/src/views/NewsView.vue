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
    this.emitter.emit('start:spinner');
    this.$store.dispatch('FETCH_NEWS_LIST');
  }
}
</script>

<style scoped>

</style>