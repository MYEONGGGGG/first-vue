/**
 * 믹씬(Mixin)
 * : 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법
 *
 * ★ 컴포넌트 구성
 * NewsView > ListItem
 * */

export default {
    // 재사용할 컴포넌트 옵션(data, methods, created 등)

    // 라우트에 '라우터 네비게이션 가드' 를 이용하여 아래 로직을 구현했기때문에 더이상 필요 없음
    // created() {
    //     this.emitter.emit('start:spinner');
    //
    //     this.$store
    //         .dispatch("FETCH_LIST", this.$route.name)
    //         .then(() => {
    //             this.emitter.emit("end:spinner");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },

    mounted() {
        // router 에서 실행한 스피너 종료
        // this.emitter.emit('end:spinner');
    }
}