<template>
  <div>
    <div v-for="user in users">{{ user.email }}</div>
<!--    <div v-for="user in users">{{ user }}</div>-->
  </div>
</template>

<script>
import { fetchUserInfo } from '@/api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchUserInfo()
        .then(response => this.users = response.data)
        .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>