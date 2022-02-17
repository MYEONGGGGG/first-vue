<template>
  <div>
    <ul>
<!--  리스트 출력-->
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow"> <!-- shadow: App.vue 의 style class -->
        <i class="checkBtn fas fa-check"
           v-bind:class="{checkBtnCompleted: todoItem.completed}"
           v-on:click="toggleComplete(todoItem, index)"></i>

        <!-- 보여지는 value 값 -->
        <span v-bind:class="{textCompleted: todoItem.completed}">
        <!-- 789 --> {{ todoItem.item }} </span>
        <!--        {{ todoItem }} // {"completed": false, "item": "789" } -->

        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],

  methods: {
    removeTodo: function (todoItem, index) {
      // 동작 확인
      // console.log('remove items..')

      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function (todoItem, index) {
      // console.log(todoItem);
      todoItem.completed = !todoItem.completed;

      // 로컬 스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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
</style>
