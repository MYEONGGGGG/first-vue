<template>
  <div id="app">
    <TodoHeader></TodoHeader>
<!--    <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 이름"></TodoInput>-->
    <TodoInput></TodoInput>
<!--    <TodoList v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 속성"></TodoList>-->
    <TodoList></TodoList>
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

  components: {
    //컴포넌트 태그명 : 컴포넌트 내용
    // 'TodoHeader': TodoHeader,
    // 'TodoInput': TodoInput,
    // 'TodoList': TodoList,
    // 'TodoFooter': TodoFooter

    // 축약
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
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
