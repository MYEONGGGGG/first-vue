<template>
  <div>
    <h1>Chart.js</h1>
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// chart.js 이용 시 발생하는 오류때문에 수정
// 오류내용: 'myChart' is assigned a value but never used.
// 오류사유: 뷰 CLI 버전이 올라가면서 ESLint 오류가 앱의 실행을 막는 현상 발생.
//         => vue.config.js 에 ESLint 비활성화 처리 ==> 비활성화 하지 않고도 오류를 방지할 수 있는 방법 찾아보기.
//         => 3. Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념
//            > --4. 애플리케이션 실전 파트-- > 01. 외부 라이브러리 모듈화 방법(차트)
//            > 3. BarChart 컴포넌트화 작업 >>> 부터 학습하기
// import Chart from 'chart.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  // 컴포넌트 속성 & 인스턴스 옵션이 들어가는 위치

  mounted() { // mounted() 라이프 사이클 훅에서 차트를 그림
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
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
  },

}
</script>

<style>
</style>
