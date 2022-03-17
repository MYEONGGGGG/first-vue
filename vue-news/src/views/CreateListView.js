/**
 * 하이 오더 컴포넌트(HOC)
 * : 컴포넌트의 로직(코드)를 재사용하기 위한 방법 및
 *   캡슐화(encapsulation)와 컴포넌트 추상화를 구현하는 방법.
 *   컴포넌트의 로직을 훼손하지 않고 재사용성을 최대한 끌어올리겠다는 전략.
 *
 *   ★ 컴포넌트 구성
 *   NewsView > ListView > ListItem
 * */
import ListView from "@/views/ListView.vue";

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리

        // High Order Component 의 이름
        name,
        // name: 'HOC Component',

        // NewsView, AskView, JobsView에서 실행한 이벤트를 HOC에 구성
        created() {
            this.emitter.emit('start:spinner');

            setTimeout(() => {
                // router name에 따라 News, Ask, Jobs 데이터 호출
                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        this.emitter.emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }, 3000); // 3000ms delay
        },

        // render 함수를 통해 컴포넌트 로딩
        // vue2.x
        // render(createElement) {
        //     return createElement(ListView);
        // }

        // 실습에서는 컴포넌트 등록 없이 진행함.
        components: {
            ListView
        },

        // vue3.x
        render() {
            // render test #1
            // console.log('**render**');

            // render test #2
            // return (
            //     <div>
            //         <h1>Hello,</h1>
            //     </div>
            // )

            // render test #3 : 실습에서 원하는 내용
            // return ListView; //반응x

            // render test #4 : 임시로 사용
            // return <list-view/>;
            return (
                <div><list-view/></div>
            );
        }
    };
}