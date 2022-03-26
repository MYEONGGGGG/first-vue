<template>

  <div class="menu">
    <a v-for="menu in menuList" :key="menu">{{ menu }}</a>
  </div>

  <!-- {{ 데이터바인딩 }} : 변경될 가능성이 있는 데이터는 데이터 바인딩을 이용한다. -->
  <div>
    <img src="./assets/img1.jpg" width="200" height="200">
    <h4>{{ products[0] }}</h4>
    <p>50만원</p>
    <button @click="increase(0)">허위매물신고</button> <span>신고수 : {{ count[0] }}</span>
  </div>
  <div>
    <img src="./assets/img2.jpg" width="200" height="200">
    <h4>{{ products[1] }}</h4>
    <p>95만원</p>
    <button @click="increase(1)">허위매물신고</button> <span>신고수 : {{ count[1] }}</span>
  </div>
  <div>
    <img src="./assets/img3.jpg" width="200" height="200">
    <h4>{{ products[2] }}</h4>
    <p>142만원</p>
    <button @click="increase(2)">허위매물신고</button> <span>신고수 : {{ count[2] }}</span>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      // 데이터 보관함
      // 데이터 이름: 데이터
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      menuList: ['Home', 'Shop', 'About'],
      count: [0, 0, 0],
    }
  },
  methods: {
    // 함수
    increase(i) {
      this.count[i] += 1;
    }
  },
  components: {
  }
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

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
