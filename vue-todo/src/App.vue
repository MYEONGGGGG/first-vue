<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
<!--    <TodoList v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 속성"></TodoList>-->
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter></TodoFooter>
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
