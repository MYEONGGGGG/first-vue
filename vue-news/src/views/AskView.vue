<template>
  <div>
    <p v-for="item in fetchedAsk">

<!-- 링크 연결 <a/> -> <router-link/>   -->
<!-- #변경전 -->
<!--      <a v-bind:href="item.url">{{ item.title }}</a>-->
<!-- #변경후1 : 응답값 url 직접이용 -->
<!--      <router-link v-bind:to="`/item/${item.url}`">{{ item.title }}</router-link>-->
<!-- #변경후2 : 응답값 id 파라미터값을 조합해서 url 생성하여 이용 -->
      <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>

      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // 방법3
    //'...' : ES6의 산기 연산자
    // 객체 표기법
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk' //store 'getters' 의 fetchedAsk
    // }),

    // 배열 표기법
    ...mapGetters([
        'fetchedAsk'
    ]),


    // 방법2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })


    // 방법1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK_LIST');
  }
}
</script>

<style scoped>

</style>