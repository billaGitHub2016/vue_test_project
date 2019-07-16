import Vue from 'vue';
import Vuex from 'vuex';
import getters from './store/getters';
import Count from './store/modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    Count,
  },
  getters,
});
