<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="?" />
    <div class="post-header" v-for="(data, i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${data.image})`"></div>
      <span class="profile-name">{{ data.name }}</span>
    </div>
  </div>
</template>

<script>
/**
 * reactive: 데이터 생성, 보통 array, object 넣을 때 이용
 * ref: 데이터 생성, 그 외 자료형 넣을 때 이용하나 array, object 이용해도 상관 없음 */
import { ref, onMounted } from 'vue';
import axios from "axios";
// import { useStore } from 'vuex';

export default {
  name: "MyPage",

  // props: {
  //   one : Number,
  // },

  // setup(props) { //첫번째 파라미터는 무조건 porps
  setup() { //첫번째 파라미터는 무조건 porps
    /**
     * [Composition API 이용하여 개발]
     * 컴포넌트를 만들기 전에 여기를 먼저 실행함.
     * 모든 기능개발을 여기서 전부 할 수 있다.
     * data() 데이터 생성, 조작
     * methods, computed, watch 생성 가능
     * hook 설정 가능
     * */

    // 데이터 생성
    // ref(reference data type)으로 데이터를 감싸야 실시간 반영 가능
    let follower = ref([]);
    let orgFollower = ref([]); // 원본 bk


    // 반영
    // Composition API에서 Lifecycle Hook 쓰려면
    // OnMounted(()=>{실행할 코드})  **On라이프사이클함수명(()=>{실행할 코드})
    onMounted(() => {
      // public 폴더안에 있는 json 파일을 Ajax로 요청하여 데이터를 가져온다.
      axios.get('/follower.json')
          .then(response => {
            follower.value = response.data;
            orgFollower.value = [...response.data]; // 원본 bk
          });
    });

    // Composition API에서 methods 함수를 사용하는 방법
    function search(inputData) {
      let newFollower = orgFollower.value.filter((a) => {
        return a.name.indexOf(inputData) != -1
      });
      follower.value = [...newFollower]
    }


    // Composition API에서 props 사용법
    // { 변수 } = ES6 Destructuring 문법
    // let { one } = toRefs(props);
    // console.log(one.value);

    // Composition API에서 watch 사용법
    // watch(one, () => {
    //   console.log("watch 변경!");
    // });

    // Composition API에서 computed 사용법
    // let result = computed(() => {
    //   return follower.value.length;
    // });
    // console.log(result.value);

    // Composition API에서 vuex 사용법
    // let store = useStore();
    // console.log(store.state.name); // $store 문법이랑 동일한 기능
    //                                // commit, Dispatch 도 이용할 수 있음
    //                                // Vuex5 버전 이상만 mapstate 사용 가능




    return { follower, search };
  },

  // data() {
  //   /**
  //    * 반영할 데이터 생성 */
  // },
  // mounted() {
  //   /**
  //    * 장착되고나서 실행할 코드 */
  // }
}
</script>

<style scoped>
.post-header {
  height: 30px;
  padding: 10px;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
</style>