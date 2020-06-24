import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [{ name: "tom", time: "2020/6/24 下午3:49:21" }],
    selection: [],
  },
  mutations: {
    add(state, data) {
      state.users.push(data);
    },
    // select(state,i){

    // },
    del(state, i) {
      state.users.splice(i, 1);
    },
    selected(state, selected) {
      state.selection.push(selected);
    },
  },
  actions: {
    addUser({ commit }, data) {
      commit("add", data);
    },
    delUser({ commit }, i) {
      commit("del", i);
    },
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
  },
});
