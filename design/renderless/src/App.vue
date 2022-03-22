<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1"> <!-- url 이라는 props에 내려준다. -->
      <!-- ... -->
      <template v-slot="{ response, loading }">
        <div v-if="!loading">
          <p>{{ response.name }}</p>
          <p>{{ response.email }}</p>
        </div>
        <div v-if="loading">
          Loading..
        </div>
      </template>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from "@/components/FetchData";

export default {
  name: 'App',
  components: {
    FetchData
  }
}
</script>

<style>
</style>
