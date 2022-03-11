<template>

  <div class="user-container">
    <div>
      <font-awesome-icon class="far-user" icon="user" />
    </div>
    <div class="user-description">
      <div>username: {{ info.id }}</div>
      time: {{ info.created }}

      <slot name="header">
        default header
      </slot>

      <slot name="body">
        default body
      </slot>

<!--      <slot name="username">-->
<!--        &lt;!&ndash; 상위 컴포넌트에서 정의할 영역 &ndash;&gt;-->
<!--      </slot>-->

<!--      <div class="time">-->
<!--        <slot name="time">-->
<!--          &lt;!&ndash; 상위 컴포넌트에서 정의할 영역 &ndash;&gt;-->
<!--        </slot>-->
<!--      </div>-->
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