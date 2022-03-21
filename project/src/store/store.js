import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    firsName: '',
    age: '',
    childs: [],
  },
  getters: {
    firsName: state => state.firsName,
    age: state => state.age,
    childs: state => state.childs,
  },
  mutations: {
    SET_FIRSTNAME(state, name) {
      state.firsName = name;
    },
    SET_AGE(state, age) {
      state.age = age;
    },
    SET_CHILDS(state, childs) {
      state.childs = childs;
    }
  },
  actions: {
    showStore({ state }) {
      console.log(state.firsName, state.age, state.childs);
    }
  } 
})