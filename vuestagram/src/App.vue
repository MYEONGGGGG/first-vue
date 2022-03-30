<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerView :inData="inData" />

  <button @click="more(cnt)" :disabled="cnt>=2">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerView from "@/components/ContainerView";
import instagram from "@/assets/instagram";
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      inData: instagram,
      cnt: 0,
    }
  },
  components: {
    ContainerView,
  },
  methods: {
    /**
     * GET 요청: 데이터 서버에서 가져올 때
     * POST 요청: 서버로 데이터를 보낼 때
     * */
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
