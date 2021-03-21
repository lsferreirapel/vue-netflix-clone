import { Action } from 'vuex';
import * as types from './mutations-types';
import { createToken } from '../services';

export const ActionLogin: Action<any, any> = ({ dispatch }, payload) => {
  dispatch('ActionCreateUser', payload);
};

export const ActionCreateUser: Action<any, any> = ({ dispatch }, payload) => {
  const token = createToken(payload);
  dispatch('ActionSetToken', token);
  dispatch('ActionSetUser', payload);
};

export const ActionSetToken: Action<any, any> = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload);
};
export const ActionSetUser: Action<any, any> = ({ commit }, payload) => {
  commit(types.SET_USER, payload);
};
