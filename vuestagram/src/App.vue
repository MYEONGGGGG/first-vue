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
      @write="content = $event"
  />

  <button @click="more(cnt)" :disabled="cnt>=2" v-if="step==0">더보기</button>

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

export default {
  name: 'App',
  data() {
    return {
      inData: instagram,
      cnt: 0,
      step: 0,
      imgUrl: '',
      content: '',
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
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgUrl,
        likes: 44,
        date: "May 9",
        liked: false,
        content: this.content,
        filter: "perpetua"
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
