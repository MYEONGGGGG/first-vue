<template>
  <!-- v-if: 조건이 참일때만 보여줌 -->
  <div class="black-bg" v-if="modal_state == true">
    <div class="white-bg">
      <img :src="products[modal_id].image" class="room-img">
      <h4>{{ products[modal_id].title }}</h4>
      <p>{{ products[modal_id].content }}</p>

<!--      <input @input="month = $event.target.value">-->
      <input v-model="month">
      <!-- <input v-model.number="month"> --> <!-- 자료형 고정 -->

      <p>대여 기간: {{month}} 개월</p>
      <p>가격: {{ products[modal_id].price * month }} 원</p>
      <button @click="btnClose">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  // props는 read-only
  // 부모 데이터를 자식이 쓰고싶을 때 이용
  props: {
    products: Array,
    modal_id: Number,
    modal_state: Boolean,
  },
  data() {
    return {
      month: 1,
    }
  },
  watch: {
    // 데이터 감시자 = 데이터가 변경될때마다 내용 실행
    // 반드시 데이터명으로 지정
    month(a) {
      // month 데이터가 number 형식이 아닐 경우 경고문 활성화
      if (a>12) {
        alert('최대 대여 기간은 12개월 입니다!');
      }
      else if (a.type!=Number) {
        alert('숫자만 입력해주세요!');
      }
    },
  },
  methods: {
    btnClose() {
      this.$emit('closeModal', this.modal_state);
    },
  }
}
</script>

<style scoped>
</style>