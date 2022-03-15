<template>
  <div id="app">
<!--    <Toolbar></Toolbar>-->
    <tool-bar></tool-bar>

    <!--mitt 예제-->
<!--    <button @mousedown="a">버튼 a</button>-->
<!--    <button @mousedown="b">버튼 b</button>-->

    <transition name="page">
      <!-- index.js: url 에 해당하는 router view 를 불러온다. -->
      <router-view></router-view>
    </transition>

    <spinner :loading="true"></spinner>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import Spinner from "@/components/Spinner.vue";
// import { useStore } from 'vuex'; //mitt 예제

export default {
  name: 'App',

  components: {
    ToolBar,
    Spinner
  },

  data() {
    return {
      loadingStatus: false
    };
  },

  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },

  created() {
    this.emitter.on('start:spinner', ()=> this.loadingStatus );
  }

  // methods: {
  //   onReceive(value) {
  //     console.log(value);
  //   }
  // },
  //
  // created() {
  //   this.emitter.on('test', this.onReceive);
  // }

  //mitt 예제
  // setup() {
  //   const emitter = useStore().state.emitter;
  //
  //   emitter.on('*', ((type, event) => console.log(type, event))); // 모든 이벤트 수신
  //
  //   function a() { emitter.emit('a: ' , 'a event!!'); } // a 이벤트 송신
  //   function b() { emitter.emit('b: ', 'b event!!'); } // b 이벤트 송신
  //
  //   return { a, b };
  // }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a.router-link_exact-active {
  text-decoration: underline;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
