import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
 modules,
 plugins: [
  createPersistedState({
    key: 'vue-netflix-clone-storage',
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
      removeItem: (key) => localStorage.removeItem(key),
    }
  }),
 ]
});
