<template>
  <!-- {{ 데이터바인딩 }} : 변경될 가능성이 있는 데이터는 데이터 바인딩을 이용한다. -->
  <div>
    <img :src="roomList.image" class="room-img">
    <!-- $emit: 부모에게 데이터 전달 -->
<!--    <h4 @click="$emit('openModal', roomList.id)">{{ roomList.title }}</h4>-->
    <h4 @click="sndData">{{ roomList.title }}</h4>
    <p>{{ roomList.price }} 원</p>
  </div>
</template>

<script>
export default {
  props: {
    roomList: Object,
  },
  methods: {
    sndData() {
      this.$emit('openModal', this.roomList.id);
    }
  },
}
</script>

<style scoped>
</style>