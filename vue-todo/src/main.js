import Vue from 'vue'
import App from './App.vue'        // APP 컴포넌트 등록
import { store } from './store/store.js'

// 인스턴스 생성
new Vue({
  el: '#app',                      // id가 app인 html tag에 Vue 컴포넌트가 마운팅
  store,                           // 변수 등록(ES6 를 이용한 축약 속성)
  // store: store,                    // 변수 등록
  render: h => h(App)

  /*
  * 표현방식 1. 함수
  * render: function (h) {  // 내부적으로 h 라는 함수를 파라미터로 받고
  *    return h(App);       // 이 함수에 App을 넘겨줘서 element 를 생성
  * }
  *
  * 표현방식 2. 화살표 함수(기본)
  * reder: h => { retrun h(App) }
  *
  * 표현방식 3. 화살표 함수(더 간단하게 작성)
  * reder: h => h(App)
  * */
})


/**
 * main.js 란?
 *      Vue 인스턴스( new Vue() ) 를 생성
 *
 *
 * el: '#app' 이 정의 되어
 *      index.html 의
 *        <body>
 *           <div id="app"></div>
 *        </body>
 *      에 Vue 컴포넌트들이 마운팅 된다.
 *
 * */
