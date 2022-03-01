/**
 * 속성 선언 방법 1. export const 로 선언과 동시에 import한 곳에 빼기
 * 화살표 함수를 이용하여 getters 속성을 선언
 * // 속성을 선언할 때에는 속성 뒤에 ';' 생략 가능
 * */

export const storedTodoItems = (state) => {
  return state.todoItems;
}
