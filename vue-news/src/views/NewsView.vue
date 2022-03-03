<template>
  <div>
    <div v-for="news in newsList">{{ news.title }}}</div>
<!--    <div v-for="news in newsList">{{ news }}}</div>-->
  </div>
</template>

<script>
import { fetchNewsList } from '@/api/index.js';
// import axios from 'axios';

export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {

    //화살표 함수로 변경 (this 바인딩 필요 없음) ** 상황별 this 바인딩 원리 이해 필요
    fetchNewsList()
        .then(response => this.newsList = response.data)
        .catch(error => console.log(error));


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