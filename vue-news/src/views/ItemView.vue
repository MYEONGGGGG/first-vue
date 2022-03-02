<template>
  <div>
    <div v-for="item in items">{{ item }}</div>
  </div>
</template>

<script>
import { fetchItemList } from "@/api/index.js";

export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    var vm = this;

    fetchItemList()
        .then(function (response) {
          console.log(response);
          vm.items = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}
</script>

<style scoped>

</style>