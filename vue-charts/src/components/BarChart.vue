<template>
<!--  <canvas id="barChart" width="600" height="200"></canvas>-->
  <canvas ref="barChart" width="600" height="200"></canvas>
</template>

<script>
export default {
  // mounted() 라이프 사이클 훅에서 차트를 그림
  mounted() {

    // #1 자바스크립트에서 DOM에 접근하는 방법
    // const ctx = document.getElementById('barChart').getContext('2d');

    // #2 Vue에서 DOM에 접근하는 방법
    // const ctx = this.$refs.barChart.getContext('2d');

    const barChart = new this.$_Chart(this.$refs.barChart.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    console.log(barChart);
  },
}
</script>

<style scoped>

</style>