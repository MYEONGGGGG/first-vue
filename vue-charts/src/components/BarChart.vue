<template>
<!--  <canvas id="barChart" width="600" height="200"></canvas>-->
  <canvas ref="barChart" width="600" height="200"></canvas>
</template>

<script>
export default {
  props: ['propsdata'], // App.vue 에서 받아온 데이터

  mounted() { // mounted() 라이프 사이클 훅에서 차트를 그림
    // #1 자바스크립트에서 DOM에 접근하는 방법
    // const ctx = document.getElementById('barChart').getContext('2d');

    // #2 Vue에서 DOM에 접근하는 방법
    // const ctx = this.$refs.barChart.getContext('2d');

    /**
     *  차트 플러그인을 바로 불러와 사용한다.
     *  = this.$refs.컴포넌트명
     *
     *  *.js 속성: type, data, options
     *  */
    const barChart = new this.$_Chart(this.$refs.barChart.getContext('2d'), {
      type: 'bar',

      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata, // 받아온 데이터 연결
      },

      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },

    });

    // console.log(barChart);
  },
}
</script>

<style scoped>

</style>