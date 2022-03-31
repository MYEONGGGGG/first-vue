<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="this.step--" v-if="step>0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="this.step++" v-if="step==1">Next</li>
      <li @click="publish" v-if="step==2">등록</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerView
      :inData="inData"
      :step="step"
      :imgUrl="imgUrl"
      :filterName="filterName"
      v-on:write="content=$event"
  />
  <!-- @write="content = $event" -->

  <button @click="more(cnt)" :disabled="cnt>=2" v-if="step==0">더보기</button>

  <!-- computed > mapState 실습 -->
  <p> {{ test1 }} </p>
  <p> {{ test2 }} </p>

  <!-- methods > mapMutations 실습 -->
  <button @click="updateLikes()">실습</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerView from "@/components/ContainerView";
import instagram from "@/assets/instagram";
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: 'App',
  data() {
    return {
      inData: instagram,
      cnt: 0,
      step: 0,
      imgUrl: '',
      content: '',
      filterName: '',
      likes: 0,
      count: 0,
    }
  },
  mounted() {
    this.emitter.on('setFilter', event => { // 받은 이벤트 수신
      this.filterName = event;
      console.log('filter name: ' + this.filterName);
    });
  },
  components: {
    ContainerView,
  },

  // computed : computed 함수는 사용해도 재실행되지 않음.(처음 실행하고 값을 간직함, 변경이 필요할 때만 실행, 계산결과 저장용 함수)
  computed: {
    name() {
      return this.$store.state.name;
    },

    // mapState: Vuex의 state를 한번에 꺼내쓸 수 있다.
    // ...mapState(['name', 'likes']),
    ...mapState({ test1: 'name', test2: 'likes' }),
  },

  // methods : methods 함수는 사용할 때마다 실행됨.
  methods: {
    /**
     * GET 요청: 데이터 서버에서 가져올 때
     * POST 요청: 서버로 데이터를 보낼 때
     * */
    ...mapMutations(['updateLikes', 'updateMore']),

    more(cnt) {
      const temp = parseInt(cnt);

      if (cnt<2) {
        axios.get(`https://codingapple1.github.io/vue/more${temp}.json`)
            .then(response => {
              this.inData.push(response.data);
            })
            .catch(error => {
              console.log(error);
            });

        this.cnt++;
      }
    },

    upload(e) {
      let file = e.target.files;
      console.log(file[0]);

      let url = URL.createObjectURL(file[0]);
      console.log(url);

      this.imgUrl = url;
      this.step = 1;
    },

    publish() {
      var thisData = {
        name: "Choi Myeongeun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgUrl,
        likes: this.likes,
        date: "May 9",
        liked: false,
        content: this.content,
        filter: this.filterName,
      };
      this.inData.unshift(thisData);
      this.step = 0;
    },
  },

}
</script>

<style>
@import "style.css";

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
