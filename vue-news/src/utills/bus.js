import mitt from 'mitt';

const emitter = mitt();

export default {
    install(Vue) {
        Vue.config.globalProperties.emitter = emitter; // 변수 보관함
    }
}

/**
 * emit: 이벤트 발송
 * on: 이벤트 수신
 * */