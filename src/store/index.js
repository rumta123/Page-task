import Vue from 'vue';
import Vuex from 'vuex';
import { cities } from './modules/cities';
import { statistics } from './modules/statistics';

Vue.use(Vuex);

const store = {
  modules: {
    cities,
    statistics,
  },
};

export default new Vuex.Store(store);
