<template>
  <div>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items" :key="item.id" :id="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
/**
 * ※주의: 'v-for'를 사용할 때에는 key를 반드시 선언해줘야한다.
 *  이유?  item 데이터가 객체이면 객체 안의 특정 속성을 key값으로 지정해줘야하기때문.
 *        :key(='v-bind:key')의 대상은 식별할 수 없는 문자열, 숫자같은 값이어야 한다.
 *        그리고 vue2.2.0 버전 이상부터는 필수로 key를 입력하게 되어있다.
 *        *참고: https://kr.vuejs.org/v2/guide/list.html
 * */
import axios from "axios";
import { handleException } from "@/utils/handler.js";

export default {
  data() {
    return {
      items: []
    }
  },

  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(response => {
            if (response.data.id === 1) {
              console.log('사용자가 인증되었습니다.');
              axios.get('https://jsonplaceholder.typicode.com/users/1')
              .then( response => {
                this.items = response.data;
              } );
            }
          })
          .catch(error => console.log(error));
    },

    // async 함수
    async loginUser1() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1'); //비동기 요청
        if (response.data.id === 1) {
          console.log('사용자가 인증되었습니다.');
          var list = await axios.get('https://jsonplaceholder.typicode.com/users/1'); //비동기 요청
          this.items = list.data;
        }
      } catch (error) {
        handleException(error);
        console.log(error);
      }
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
