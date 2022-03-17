<template>
  <div id="app">
<!--    <Toolbar></Toolbar>-->
    <tool-bar></tool-bar>

    <!--mitt 예제-->
<!--    <button @mousedown="a">버튼 a</button>-->
<!--    <button @mousedown="b">버튼 b</button>-->

    <!-- ** [Vue warn] **
         vue-router.esm-bundler.js?6c02:72 [Vue Router warn]:
         <router-view> can no longer be used directly inside <transition> or <keep-alive>.
     -->
    <!-- Vue2.x -->
    <!--    <transition name="page">-->
    <!--      &lt;!&ndash; index.js: url 에 해당하는 router view 를 불러온다. &ndash;&gt;-->
    <!--      <router-view></router-view>-->
    <!--    </transition>-->

    <!-- Vue3.x -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <div>
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
    <!-- ** [Vue warn] ** -->

    <spinner :loading="loadingStatus"></spinner>
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
    // 이벤트 버스 실행
    this.emitter.on('start:spinner', () => this.startSpinner() );
    this.emitter.on('end:spinner', () => this.endSpinner() );
  },

  // beforeDestroy() {
  //   this.emitter.off('start:spinner', this.startSpinner);
  //   this.emitter.off('end:spinner', this.endSpinner);
  // },

  // 컴포넌트가 제거되기 전 실행되는 라이프사이클
  onUnmounted() {
    // 이벤트 버스 해제(컴포넌트 역할이 끝나고 이벤트가 쌓이지 않게 off 처리)
    this.emitter.off('start:spinner', this.startSpinner);
    this.emitter.off('end:spinner', this.endSpinner);
  }


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
