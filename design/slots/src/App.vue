<template>
  <div>
    <ul>
      <item-view v-for="item in items" :key="item.id">
        {{ item }}
      </item-view>
    </ul>
  </div>
</template>

<script>
import ItemView from "@/ItemView";

export default {
  components: {
    ItemView,
  },
  data() {
    return {
      items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5']
    }
  }
}
</script>

<style>
</style>
