<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="fetchedItem">
<!--        <div >{{ fetchedItem.user }}</div>-->
<!--        <template>{{ fetchedItem.time_ago }}</template>-->

        <!-- slot 재정의 -->
        <template v-slot:username>
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
        </template>

        <template v-slot:time>{{ 'posted ' + fetchedItem.time_ago }}</template>
      </user-profile>

<!--      <div class="user-container">-->
<!--        <div> &lt;!&ndash; class="라이브러리" icon="아이콘명" &ndash;&gt;-->
<!--          <font-awesome-icon class="far-user" icon="user" />-->
<!--        </div>-->
<!--        <div class="user-description">-->
<!--            <router-link v-bind:to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>-->
<!--            <div class="time">{{ fetchedItem.time_ago }}</div>-->
<!--        </div>-->
<!--      </div>-->
    </section>

    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>

    <section>
      <div v-html="fetchedItem.content"></div>
    </section>

<!-- ========= 화면 구조화 전 ========= -->
<!--    JSON 데이터 전체 바인딩(확인용) -->
<!--    {{ this.$store.state.item }}-->

<!--    mapGetters 로 변경: {{ itemDtl.title }} -> {{ fetchedItem.title }} -->
<!--    관리자 화면에서 뷰엑스 바인딩을 확인해보면 맵게터로 연결된걸 확인할 수 있다. -->
<!--    <p>title : {{ fetchedItem.title }}</p>-->
<!--    <p>user : {{ fetchedItem.user }}</p>   -->
<!--    <p>content: {{ fetchedItem.content }}</p>-->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile
  },

  computed: {
    // itemDtl() {
    //   return this.$store.state.item;
    // },

    ...mapGetters(['fetchedItem'])
  },

  created() {
    const itemId = this.$route.params.id;

    // store 이용하여 호출
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.far-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 7px;
}
</style>