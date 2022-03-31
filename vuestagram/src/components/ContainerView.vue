<template>
  <div>
    <div v-if="step==0">
      <post-view :filterName="filterName" v-for="(data, i) in inData" :key="i" :inData="inData[i]"/>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step==1">
      <div class="upload-image" :style="{ backgroundImage: `url(${imgUrl})`}"></div>
      <div class="filters">
        <filter-box :imgUrl="imgUrl" :filter="filter" :key="filter" v-for="filter in filterList">
          <span style="color: #2c3e50">{{ filter }}</span>
        </filter-box>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step==2">
      <div class="upload-image" :style="{ backgroundImage: `url(${imgUrl})`}"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)" class="write-box">내용을 입력하세요.</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import PostView from "@/components/PostView";
import FilterBox from "@/components/FilterBox";
import filter from "@/assets/filter";

export default {
  name: "ContainerView",
  data() {
    return {
      filterList: filter,
    }
  },
  props: {
    inData: Array,
    step: Number,
    imgUrl: String,
    filterName: String,
  },
  components: {
    FilterBox,
    PostView,
  },
}
</script>

<style scoped>
.upload-image{
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size : cover;
}
.filters{
  overflow-x:scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>