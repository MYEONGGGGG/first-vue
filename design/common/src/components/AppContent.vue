<template>
  <div>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        {{ item }}
      </li>
    </ul>

    <!-- 상위 컴포넌트인 App.vue에 이벤트를 올려 보낸다. -->
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true, // 필수값 여부
    },
  }
}
</script>

<style scoped>

</style>