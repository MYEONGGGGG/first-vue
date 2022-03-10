<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },

  created() {
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user${userName}.json`);

    // store 이용하여 호출
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style scoped>

</style>