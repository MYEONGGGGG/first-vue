<template>
  <div>
    <ul class="list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <div>
          <!-- 타이틀 영역 -->
          <p class="title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>

          <!-- 상세 정보 영역 -->
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
                v-if="item.user"
                v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // #1
  // 데이터 분기 처리
  // created() {
  //   const name = this.$route.path;
  //   var dispatch;
  //
  //   if (name === '/news') { dispatch = 'FETCH_NEWS_LIST'; }
  //   else if (name === '/ask') { dispatch = 'FETCH_ASK_LIST'; }
  //   else if (name === '/jobs') { dispatch = 'FETCH_JOBS'; }
  //   else { dispatch = null; }
  //
  //   if (dispatch != null) { this.$store.dispatch(dispatch); }
  //   else { console.log('pathName is null!'); }
  // },

  computed: {
    // #3
    listItems() {
      return this.$store.state.list;
      // return this.$store.getters.fetchedList;
    }

    // #2: 공통 리스트 뷰 생성으로(ListView.vue) 뷰 명칭에 따른 데이터 분기처리가 필요 없어졌으며,
    //     NewsView.vue, AskView.vue, JobsView.vue 에 관련된 로직과 파일은 더 이상 필요 없다.
    // listItems() {
    //   const name = this.$route.path;
    //
    //   if (name === '/news') { return this.$store.state.newsList; }
    //   else if (name === '/ask') { return this.$store.state.askList; }
    //   else if (name === '/jobs') { return this.$store.state.jobs; }
    // }
  }
}
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}
.title {
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.link-text {
  color: #828282;
}
</style>