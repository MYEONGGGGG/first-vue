<template>
  <div id="app">
    <app-header :title="appTitle"></app-header>

    <!-- 하위 컴포넌트인 AppContent.vue에 items 데이터를 내려준다. -->
    <app-content :items="items" @renew="renewItems"></app-content>
  </div>
</template>

<script>
/**
 * Common Approach
 * : 일반적인 컴포넌트 구조화 방식 */
import AppContent from "@/components/AppContent";
import AppHeader from "@/components/AppHeader";

export default {
  name: 'App',

  components: {
    AppContent,
    AppHeader,
  },

  data() {
    return {
      appTitle: 'Common Approach',
      items: [10, 20, 30],
    }
  },

  methods: {
    renewItems() {
      this.items = [40, 50, 60];
    }
  }
}
</script>

<style>
</style>
