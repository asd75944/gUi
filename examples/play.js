import Vue from 'vue';
import GUI from 'main/index.js';
import App from './play/index.vue';
import 'packages/theme-chalk/src/index.scss';

Vue.use(GUI)

new Vue({
  render: h => h(App),
}).$mount('#app');
