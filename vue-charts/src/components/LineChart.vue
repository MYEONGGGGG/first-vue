<template>
  <canvas ref="lineChart" width="600" height="200"></canvas>
</template>

<script>
export default {
  props: ['propsdata'],

  mounted() {

    const lineChart = new this.$_Chart(this.$refs.lineChart.getContext('2d'), {
      type: 'line',
      data: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', ],
        datasets: this.propsdata,
      },
      options: {}
    });

    // console.log(lineChart);
  }
}
</script>

<style scoped>

</style>