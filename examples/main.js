import Vue from 'vue';
import App from './App.vue';
import AnxUi from '../packages/index';

Vue.config.productionTip = false;
Vue.use(AnxUi);

new Vue({
  render: h => h(App)
}).$mount('#app');
