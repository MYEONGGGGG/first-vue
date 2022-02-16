<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
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
  components: {TodoFooter, TodoList, TodoInput, TodoHeader},
  comments: {
    //컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
</style>
