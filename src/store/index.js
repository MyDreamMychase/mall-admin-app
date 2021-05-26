import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '@/util/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态，false代表不闭合
    collapsed: false,
    user: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userinfo) {
      state.user = userinfo;
    },
    logOut(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userinfo) {
      commit('setUserInfo', userinfo);
      setCookie(userinfo);
    },
    logOut({ commit }) {
      commit('logOut');
      removeUserCookie();
    },
  },
  modules: {
  },
});
