<template>
  <input type="checkbox"
         :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
  // @input 이벤트
  // :value 값
  props: ['value'], // false

  methods: {
    toggleCheckBox() {
      // this.$emit('input', !this.value); //vue2 의 방법
      this.$emit('update:value', !this.value); //vue3 의 방법
    }
  },
}
</script>

<style scoped>

</style>