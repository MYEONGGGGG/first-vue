<template>
  <div>
    <p v-for="item in fetchedAsk">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
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