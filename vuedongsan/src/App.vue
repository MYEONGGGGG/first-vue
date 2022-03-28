<template>

  <!-- 효과 -->
  <transition name="fade">
    <!-- modal -->
    <modal :products="products"
           :modal_id="modal_id"
           :modal_state="modal_state"
           @closeModal="modal_state=false; modal_id = $event"
    />
  </transition>

  <!-- menubar -->
  <div class="menu">
    <a v-for="menu in menuList" :key="menu">{{ menu }}</a>
  </div>

  <!-- 배너 -->
  <discount-view :data="orgDiscount" v-if="showDiscount==true" />

  <!-- 상품 정렬 -->
  <button @click="priceSort">가격순정렬</button>
  <button @click="resetSort">되돌리기</button>

  <!-- 상품 목록 -->
  <!-- $event: 자식에게 넘어온 데이터 -->
  <card :roomList="products[i]"
        v-for="(roomList,i) in products"
        :key="roomList"
        @openModal="modal_state=true; modal_id = $event"
  />
</template>


<script>
import dataList from "./assets/oneroom";
import DiscountView from "./components/DiscountView";
import Card from "./components/Card";
import Modal from "./components/Modal";

export default {
  name: 'App',

  // 부모, 자식 둘 다 데이터를 이용해야할 경우에는
  // 부모에다 데이터를 보관한다.
  data() {
    return {
      // 데이터 보관함 = 데이터의 상태
      // 데이터 이름: 데이터

      orgData: [...dataList], // 데이터 원본(데이터 사본 생성)

      // products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      products: dataList,

      menuList: ['Home', 'Shop', 'About'],
      // count: [0, 0, 0],

      modal_state: false, // 모달창 상태
      modal_id: 0, // 선택한 상품의 id값

      orgDiscount: 50,
      showDiscount: true, // 배너창 상태
    }
  },

  methods: {
    // 함수

    priceSort() {
      this.products.sort(function (a,b) {
        return a.price - b.price;
      });
    },

    resetSort() {
      // array, object 데이터는 각각 개별의 사본 데이터를 생성 후 등호 기호를 이용해야한다.
      this.products = [...this.orgData];
    },

    // increase(i) {
    //   this.count[i] += 1;
    // }
  },

  components: {
    DiscountView,
    Card,
    Modal,
  },

  created() {
    // html 생성 전 실행
  },

  mounted() {
    // 컴포넌트 장착 후 실행
    // = App.vue 가 mount 되고 실행

    // 2초후 배너 비활성화
    // setTimeout(() => {
    //   // 배너 닫기
    //   this.showDiscount = false;
    // }, 2000);

    setInterval(() => {
      if (this.orgDiscount>0) {
        this.orgDiscount--;
      }
    }, 1000);
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
}
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 200px;
  margin-top: 40px;
}

.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
