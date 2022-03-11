<template>
  <div>
    UserView
    <user-profile :info="userInfo">
      <div>{{ userInfo.id }}</div>
      <template>{{ userInfo.time_ago }}</template>
<!--      <div slot="username">{{ userInfo.id }}</div>-->
<!--      <template slot="time">{{ userInfo.time_ago }}</template>-->

      <h3 slot="header">
        슬롯 재정의
      </h3>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";

export default {
  /**
   * ★★★ 데이터 처리 흐름 방법 2 ★★★
   * UserView에서 props로 전달
   *   = UserProfile의 props 속성으로 데이터를 전달
   *
   * [데이터 전달 흐름]
   * UserView --> Vuex(API호출 포함)
   *          -"computed의 userInfo를 info로 전달"-> UserProfile에서 props로 데이터를 내려받음 */

  components: {
    UserProfile
  },

  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },

  created() {
    const userName = this.$route.params.id;

    // store 이용하여 호출
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style scoped>

</style>