const state = {
  countNum: 0,
};

const mutations = {
  ADD_NUM: (state, num) => {
    state.countNum += num;
  },
};

const actions = {
  addNum({ commit }, num) {
    commit('ADD_NUM', num);
  },
  addNumAsync({ commit, state }, num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('ADD_NUM', num);
        resolve();
      }, 1000);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
