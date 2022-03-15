import mitt from 'mitt';

const emitter = mitt();

export default {
    install(Vue) {
        Vue.config.globalProperties.emitter = emitter; // 변수 보관함
    }
}