<template>
  <div @click="reg" class="filter-item" :class="filter" :style="{ backgroundImage: `url(${imgUrl})`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imgUrl: String,
    filter: String,
  },
  methods: {
    reg() {
      this.emitter.emit('setFilter', this.filter); // 다른 컴포넌트에 이벤트 전달
    }
  },
}
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>