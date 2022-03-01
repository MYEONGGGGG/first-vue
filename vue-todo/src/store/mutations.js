/**
 * 속성 선언 방법 2. const 선언 후 export 로 import한 곳에 빼기
 * 화살표 함수를 이용하여 mutations 속성을 선언
 * // 속성을 선언할 때에는 속성 뒤에 ';' 생략 가능
 * */

const addOneItem = (state, todoItem) => {
  const obj = {completed: false, item: todoItem};  // const: 변수 충돌 방지

  // 저장하는 로직
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

  // 로컬 스토리지 데이터 갱신
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}


export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }
