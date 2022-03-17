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

  created() {
    // App.vue로 스피터 시작 이벤트 전달
    this.emitter.emit('start:spinner');

    setTimeout(() => {
      // 데이터 요청
      // News: FETCH_NEWS_LIST, Ask: FETCH_ASK_LIST, Jobs: FETCH_JOBS
      this.$store.dispatch('FETCH_JOBS')
          .then(() => {
            // App.vue로 스피너 종료 이벤트 전달
            this.emitter.emit('end:spinner');
          })
          // 오류 시 수행
          .catch((error) => {
            console.log(error);
          });
    }, 3000); // 3000ms delay
  }
}
</script>

<style scoped>
</style>