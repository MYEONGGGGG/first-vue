/**
 * Vuex 설치 방법
 * 터미널 > npm i vuex@3.6.2 --save
 *
 * 등록된 라이브러리 불러오기 */
import Vue from 'vue'
import Vuex from 'vuex'


/////// vuex 설치 및 등록

Vue.use(Vuex); // .use : vue 의 플러그인
               // vue 에서 vuex 를 사용하겠다.


const storage = {
  fetch() {
    const arr = [];

    // localstorage 데이터가 존재 한다면
    if (localStorage.length > 0) {
      // for (var i=0; i<localStorage.length; i++) {
      for (let i=0; i<localStorage.length; i++) { // let: 값 재할당 가능

        // 기본으로 생성되는 key 제외
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // typeof: type 확인
          // JSON.parse: 개발자 화면 - console 에서 object 를 구별하여 보여줌
          // console.log(JSON.parse( localStorage.getItem(localStorage.key(i)) ));

          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

          // this.todoItems.push(localStorage.key(i));
          // console.log(localStorage.key(i));
        }
      } //for
    } //if

    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    // headerText: 'TODO it!'
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem};  // const: 변수 충돌 방지

      // 저장하는 로직
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

      // 로컬 스토리지 데이터 갱신
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});



/**
 * const : 변수 재선언, 재할당 모두 불가능
 * let : 변수 재선언은 가능하나 재할당은 불가능
 * */


/**
 * Vuex 기술 요소
 *
 * state : 여러 컴포넌트에 공유되는 데이터(data)
 * getters : 연산된 state 값을 접근하는 속성(computed)
 * mutations : state 값을 변경하는 이벤트 로직, 메서드(methods)
 * action : 비동기 처리 로직을 선언하는 메서드(aysnc methods)
 * */
