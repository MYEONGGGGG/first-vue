<template>
  <div id="app">
    <TodoHeader></TodoHeader>
<!--    <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 이름"></TodoInput>-->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
<!--    <TodoList v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 속성"></TodoList>-->
    <TodoList v-bind:propsdata="todoItems"
              v-on:removeItem="removeOneItem"
              v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
//컴포넌트 등록
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";


export default {
  data: function () {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function (todoItem) {
      var obj = {completed: false, item: todoItem};

      // 저장하는 로직
      // localStorage.setItem(this.newTodoItem, obj); // key: 입력값, value: [Object Object]
      localStorage.setItem(todoItem, JSON.stringify(obj)); // key: 입력값, value: {component: false item: 입력값}

      this.todoItems.push(obj);
    },
    removeOneItem: function (todoItem, index) {
      // console.log(todoItem, index); // 동작 확인
      localStorage.removeItem(todoItem.item); // 오브젝트(todoItem)가 아닌 특정 문자열 기준으로 접근하여
                                              // 삭제하게 구성했기때문에 todoItem.item 를 이용하여 지운다.
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function (todoItem, index) {
      console.log(todoItem);

      // 안티패턴(anti-pattern) 로직 =========
      // todoItem.completed = !todoItem.completed;

      // todoItems 를 접근하여 동작하는 로직
      this.todoItems[index].completed = !this.todoItems[index].completed; // = todoItem.completed = !todoItem.completed;

      // 로컬 스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem: function () {
      localStorage.clear();
      this.todoItems = [];
    },
  }, //methods

  // 인스턴스가 생성되는 시점에 호출되는 로직
  created: function () {
    // localstorage 데이터가 존재 한다면
    if (localStorage.length > 0) {
      for (var i=0; i<localStorage.length; i++) {

        // 기본으로 생성되는 key 제외
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // typeof: type 확인
          // JSON.parse: 개발자 화면 - console 에서 object 를 구별하여 보여줌
          // console.log(JSON.parse( localStorage.getItem(localStorage.key(i)) ));

          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

          // this.todoItems.push(localStorage.key(i));
          // console.log(localStorage.key(i));
        }
      } //for
    } //if
  },
  components: {
    //컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
  // components: {TodoFooter, TodoList, TodoInput, TodoHeader},
  // comments: {
  //   //컴포넌트 태그명 : 컴포넌트 내용
  //   'TodoHeader': TodoHeader,
  //   'TodoInput': TodoInput,
  //   'TodoList': TodoList,
  //   'TodoFooter': TodoFooter
  // }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
