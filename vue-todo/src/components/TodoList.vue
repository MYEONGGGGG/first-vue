<template>
  <div>
    <ul>
<!--  리스트 출력-->
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow"> <!-- shadow: App.vue 의 style class -->
        <i class="checkBtn fas fa-check" v-on:click="toggleComplete"></i>

        {{ todoItem }}

        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function (todoItem, index) {
      // 동작 확인
      // console.log('remove items..')

      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function () {

    }
  },

  // 인스턴스가 생성되는 시점에 호출되는 로직
  created: function () {
    // localstorage 데이터가 존재 한다면
    if (localStorage.length > 0) {
      for (var i=0; i<localStorage.length; i++) {

        // 기본으로 생성되는 key 제외
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(localStorage.key(i));
          // console.log(localStorage.key(i));
        }
      } //for
    } //if
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
