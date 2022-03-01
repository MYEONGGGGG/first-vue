<template>
  <div class="inputBox shadow">
    <!-- v-model : 뷰 인스턴스에 매핑하는 역할 -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
<!--    <button v-on:click="addTodo">add</button>-->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <!-- 등록한 Modal 컴포넌트(./common/Modal) -->
    <Modal v-if="showModal" @close="showModal = false">
      <!-- Modal의 특정 슬롯을 여기서 재정의 할 수 있다. -->

      <!-- 헤더 재정의 -->
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>

      <!-- 바디 재정의 -->
      <div slot="body">
        입력된 내용이 없습니다.
        값을 입력하세요.
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";


export default {
  components: {
    // 현재 화면 기준 관계도
    // App.vue : TodoInput.vue 의 상위 컴포넌트
    // Modal.vue : TodoInput.vue 의 하위 컴포넌트

    // Modal 컴포넌트 등록
    // Modal: Modal

    // 축약
    Modal
  },

  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },

  methods: {
    addTodo() {
      // 입력값이 존재할 경우
      if (this.newTodoItem !== '') {
        // this.$emit('이벤트 이름', 인자1, 인자2, ...);
        // this.$emit('addTodoItem', this.newTodoItem);
        this.$store.commit('addOneItem', this.newTodoItem);

        // 초기화
        this.clearInput();
      }
      // 입력값이 존재하지 않을 경우, 안내 메세지 띄움
      else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;

}
</style>
