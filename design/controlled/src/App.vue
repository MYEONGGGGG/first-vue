<template>
<!--  <check-box v-model="checked"></check-box>--> <!-- vue2의 방법 -->
  <check-box v-model:value="checked"></check-box> <!-- vue3의 방법 -->
</template>

<script>
import CheckBox from "@/components/CheckBox";

export default {
  name: 'App',
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: false,
    }
  },
}
</script>

<style>
</style>
