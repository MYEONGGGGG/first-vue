<template>

  <div class="user-container">
    <div>
      <font-awesome-icon class="far-user" icon="user" />
    </div>
    <div class="user-description">
<!--      <div>username: {{ info.id }}</div>-->
<!--      time: {{ info.created }}-->


<!--      화면마다 접근해야하는 데이터가 다르기때문에-->
<!--      slot으로 재정의하여 이용한다.-->
<!--      ItemView -> info.user-->
<!--      UserView -> info.id-->

      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>

      <div class="time">
        <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>

        <slot name="karma">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  // 가져온 데이터를 props 속성으로 내려받는다.
  props: {
    info: Object
  }

  /**
   * ★★★ 데이터 처리 흐름 방법 1 ★★★
   * UserProfile에서 state로 접근
   *   = computed 속성으로 접근하여 데이터 받아옴
   *
   * [데이터 전달 흐름]
   * UserView --> Vuex(API호출 포함) -"computed로 접근"-> UserProfile */
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   }
  // },
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