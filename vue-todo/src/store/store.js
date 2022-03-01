/**
 * Vuex 설치 방법
 * 터미널 > npm i vuex@3.6.2 --save
 *
 * 등록된 라이브러리 불러오기 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 프로젝트 구조화 & 모듈화 방법1.
 *   ES6 문법을(import, export) 이용하여 속성별로 모듈화
 *   모듈 대상: Vuex.Store({}) 의 속성들
 * */
// import * as getters from './getters.js'
// import * as mutations from './mutations.js'

/**
 * 프로젝트 구조화 & 모듈화 방법2.
 * */
import todoApp from './modules/todoApp.js'



/////// vuex 설치 및 등록

Vue.use(Vuex); // .use : vue 의 플러그인
               // vue 에서 vuex 를 사용하겠다.

export const store = new Vuex.Store({


  /**
   * 프로젝트 구조화 & 모듈화 방법1.
   * ES6 문법) 명칭이 같을 경우 통합 가능
   *
   * state: {},
   * getters: getters,
   * mutations: mutations
   *
   * -- ES6 문법 적용-->
   *
   * state: {},
   * getters,
   * mutations
   * */
  // 모듈화 방법2 를 이용할 경우 이 부분은 todoApp.js 로 이동한다.
  // state: {
  //   // headerText: 'TODO it!'
  //   todoItems: storage.fetch()
  // },

// //  getters: getters,
//   getters,
//
// //  mutations: mutations
//   mutations


  /**
   * 프로젝트 구조화 & 모듈화 방법2.
   * */
  modules: {
// todoApp: todoApp
    todoApp
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
