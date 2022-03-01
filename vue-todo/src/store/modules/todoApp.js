/**
 * 객체 안에 여러개의 속성을 선언할 경우
 * 속성과 속성 사이를 ',' 로 연결해줘야한다.
 * */


const storage = {
  fetch() {
    const arr = [];

    // localstorage 데이터가 존재 한다면
    if (localStorage.length > 0) {
      for (let i=0; i<localStorage.length; i++) { // let: 값 재할당 가능

        // 기본으로 생성되는 key 제외
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  }
};

const state = {
  todoItems: storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
};

const mutations = {
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
};


export default {
  state,
  getters,
  mutations
};
