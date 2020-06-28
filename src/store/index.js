import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const localEvent = function(item) {
  this.get = function() {
    return JSON.parse(localStorage.getItem(item));
  };
  this.set = function(obj) {
    localStorage.setItem(item, JSON.stringify(obj));
  };
  this.clear = function() {
    localStorage.removeItem(item);
  };
};
const local = new localEvent("notebook");
const state = local.get() || {
  allList: [
    {
      content: "第一件事",
      time: "2020/6/24 下午3:49:21",
      id: "kbu97qqv",
    },
  ],
  now: [],
  count:1000
};

const mutations = {
  add(state, data) {
    state.allList.push(data);
    local.set(state);
  },
  del(state, i) {
    state.allList.splice(i, 1);
  },
  now(state, selected) {
    state.selection.push(selected);
  },
  increment(state){
    console.log(state.count);
    state.count++;
    console.log("怎么肥四啊mutation");
    console.log(state.count)
  }
};
const actions = {
  addUser({ commit }, data) {
    commit("add", data);
  },
  delUser({ commit }, i) {
    commit("del", i);
  },

};
const getters = {
  delContent(state) {
    return state.allList;
  },
  selectedItems(state) {
    return state.selection;
  },
  modify(state) {
    return state.now;
  },
  getTodoById: (state) => (id) => {
    return state.allList.find((todo) => todo.id === id);
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
