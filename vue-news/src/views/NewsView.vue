<template>
  <div>
    <p v-for="news in this.$store.state.newsList">
      <a v-bind:href="news.url">{{ news.title }}</a> <!-- v-bind 로 연결 시, 변수가 된다. -->
      <small>
        {{ news.time_ago }} by
<!--        <router-link v-bind:to="'/user/' + news.user">{{ news.user }}</router-link>-->
        <router-link v-bind:to="`/user/${news.user}`">{{ news.user }}</router-link>
      </small>
    </p>
<!--    <div v-for="news in this.$store.state.newsList">{{ news.title }}</div>-->

    <!-- store를 구현하면서 newsList 를 참조하는 부분이 사라져 필요없어짐 -->
    <!--    <div v-for="news in newsList">{{ news.title }}}</div>-->
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';
// import axios from 'axios';

export default {
  // store 를 구현하면서 data() 는 필요없어짐
  // data() {
  //   return {
  //     newsList: []
  //   }
  // },


  created() {

    this.$store.dispatch('FETCH_NEWS_LIST'); // FETCH_NEWS 로 코드의 제어가 넘어감.


    // //화살표 함수로 변경 (this 바인딩 필요 없음) ** 상황별 this 바인딩 원리 이해 필요
    // fetchNewsList()
    //     .then(response => this.newsList = response.data)
    //     .catch(error => console.log(error));


    // var vm = this; // this 바인딩
    // fetchNewsList()
    // .then(function (response) {
    //   console.log(response);
    //   vm.newsList = response.data;
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });


    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    // .then(function(response) {
    //   console.log(response);
    //   vm.users = response.data;
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
  }
}
</script>

<style scoped>

</style>