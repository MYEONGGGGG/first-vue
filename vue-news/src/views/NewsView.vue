<template>
  <div>
    <div v-for="news in newsList">{{ news }}}</div>
  </div>
</template>

<script>
// import axios from 'axios';
import { fetchNewsList } from '@/api/index.js';

export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    //
    var vm = this;

    fetchNewsList()
        .then(function (response) {
          console.log(response);
          vm.newsList = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

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