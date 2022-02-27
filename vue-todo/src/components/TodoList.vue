<template>
  <div>
    <transition-group name="list" tab="ul">
      <!--  리스트 출력-->
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow"> <!-- shadow: App.vue 의 style class -->
        <i class="checkBtn fas fa-check"
           v-bind:class="{checkBtnCompleted: todoItem.completed}"
           v-on:click="toggleComplete(todoItem, index)"></i>

        <!-- 보여지는 value 값 -->
        <span v-bind:class="{textCompleted: todoItem.completed}">
              {{ todoItem.item }} </span>

        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(todoItem, index) {
      // this.$emit('이벤트 이름', 인자1, 인자2, ...);
      // this.$emit('removeItem', todoItem, index);

      this.$store.commit('removeOneItem', {todoItem, index});

      // 동작 확인
      // console.log(todoItem)
    },
    toggleComplete(todoItem, index) {
      // this.$emit('toggleItem', todoItem, index);
      this.$store.commit('toggleOneItem', {todoItem, index});
    }
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
