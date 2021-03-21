import { Module } from 'vuex';

import * as types from './mutations-types';
import { User } from '../services/auth.types';
import * as actions from './actions';

interface AuthStates {
  token: string;
  user: User;
}

const authModule: Module<AuthStates, any> = {
  state: {
    token: '',
    user: {
      name: '',
      iconUrl: '',
      iskid: false,
    },
  },
  mutations: {
    [types.SET_TOKEN](state, payload) {
      state.token = payload;
    },
    [types.SET_USER](state, payload) {
      state.user = payload;
    }
  },
  getters: {
    hasToken({ token }) {
      return !!token
    },
  },
  actions,
  namespaced: true,
};

export default authModule;
