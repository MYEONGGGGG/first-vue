<template>
  <div>
    <div v-for="item in items">{{ item.title }}</div>
<!--    <div v-for="item in items">{{ item }}</div>-->
  </div>
</template>

<script>
import {fetchItemList} from "@/api/index.js";

export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    fetchItemList()
        .then(response => this.items = response.data)
        .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>