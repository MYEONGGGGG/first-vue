// chart.js 이용 시 발생하는 오류때문에 수정
// 오류내용: 'myChart' is assigned a value but never used.
// 오류사유: 뷰 CLI 버전이 올라가면서 ESLint 오류가 앱의 실행을 막는 현상 발생.
//         => vue.config.js 에 ESLint 비활성화 처리 ==> 비활성화 하지 않고도 오류를 방지할 수 있는 방법 찾아보기.
// import Chart from 'chart.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    /**
     * 차트를 컴포넌트화 -> 컴포넌트를 플로그인화 */

    install(app) {
        // '$_' : 모든 컴포넌트에서 공용으로 사용할 수 있게 등록

        // #Vue3 방법
        app.config.globalProperties.$_Chart = Chart;

        // #Vue2 방법
        // app.prototype.$_Chart = Chart;
    }
}