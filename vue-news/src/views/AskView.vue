<template>
  <div>
    <list-item></list-item>

    <!--    <ul class="ask-list">-->
    <!--      <li v-for="item in fetchedAsk" class="post">-->
    <!--        <div class="points">-->
    <!--          {{ item.points }}-->
    <!--        </div>-->

    <!--        <div>-->
    <!--          <p class="ask-title">-->
    <!--            <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>-->
    <!--          </p>-->
    <!--          <small class="link-text">-->
    <!--            {{ item.time_ago }} by {{ item.user }}-->
    <!--          </small>-->
    <!--        </div>-->
    <!--      </li>-->
    <!--    </ul>-->
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import ListMixin from "@/mixins/ListMixin";

export default {
  components: {
    ListItem
  },

  mounted() {
    // router 에서 실행한 스피너 종료
    // this.emitter.emit('end:spinner');
  },

  // mixins 속성 추가
  mixins: [ListMixin]

  // created() {
  //   // App.vue로 스피터 시작 이벤트 전달
  //   this.emitter.emit('start:spinner');
  //
  //   setTimeout(() => {
  //     // 데이터 요청
  //     // News: FETCH_NEWS_LIST, Ask: FETCH_ASK_LIST, Jobs: FETCH_JOBS
  //     this.$store.dispatch('FETCH_ASK_LIST')
  //         .then(() => {
  //           // App.vue로 스피너 종료 이벤트 전달
  //           this.emitter.emit('end:spinner');
  //         })
  //         // 오류 시 수행
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //   }, 3000); // 3000ms delay
  // }
}
</script>

<style scoped>
</style>