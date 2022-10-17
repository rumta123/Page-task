import Vue from 'vue';
import App from './Components/App.vue';
import store from './store';
import './styles/index.scss';

const vm = new Vue({
  render: (h) => h(App),
  store,
});
vm.$mount('#app');
