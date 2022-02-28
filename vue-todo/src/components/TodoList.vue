<template>
  <div>
    <transition-group name="list" tab="ul">
      <!--  리스트 출력-->
      <!-- this.todoItems : 스크립트에 등록한 연산자 -->
      <li v-for="(todoItem, index) in this.storedTodoItems()" v-bind:key="todoItem.item" class="shadow"> <!-- shadow: App.vue 의 style class -->
        <i class="checkBtn fas fa-check"
           v-bind:class="{checkBtnCompleted: todoItem.completed}"
           v-on:click="toggleComplete(todoItem, index)"></i>

        <!-- 보여지는 value 값 -->
        <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>


<script>
/**
 * mapState: Vuex 에 선언한 state 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
 * mapGetters: Vuex 에 선언한 getters 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
 * mapMutations: Vuex 에 선언한 mutations 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
 * mapActions: Vuex 에 선언한 actions 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
 *
 * 헬퍼 문법
 *  - 배열 리터럴: Vuex에 선언한 속성을 그대로 컴포넌트에 연결
 *  ...mapMutations([
 *    'clickBtn', // 'clickBtn' : clickBtn
 *    'addNumber' // addNumver(인자)
 *  ])
 *
 *  - 객체 리터럴: Vuex에 선언한 속성을 컴포넌트의 특정 메서드에 연결
 *  ...mapMutations({
 *    popupMsg: 'clickBtn' // 컴포넌트 메서드 명 : Store의 뮤테이션 명
 *  })
 * */

import { mapGetters, mapMutations } from 'vuex'


export default {

  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem'
      // toggleComplete: 'toggleOneItem'
    }),

    toggleComplete(todoItem, index) {
      // this.$emit('toggleItem', todoItem, index);
      this.$store.commit('toggleOneItem', {todoItem, index});
    },
  },

  computed: {
    ...mapGetters(['storedTodoItems'])
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}


/* 리스트 아이템 트렌지션 효과 */
/* transition-group 의  name + 클래스 명 */
/* 클래스: "name"-enter, "name"-enter-active, "name"-enter-to,  --> 효과가 들어가기 전
          "name"-leave, "name"-leave-active, "name"-leave-to   --> 효과가 나올때 */

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
