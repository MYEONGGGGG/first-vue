<template>
  <div>
    <div v-for="ask in this.$store.state.askList">{{ ask.title }}}</div>
  </div>
</template>

<script>
// import {fetchAskList} from '@/api/index.js';

export default {
  created() {
    this.$store.dispatch('FETCH_ASK_LIST');
  }
}
</script>

<style scoped>

</style>