import { createStore } from 'vuex';

import productsModule from './store/modules/products';
import cartModule from './store/modules/cart';

export default createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      userLogged: false,
    };
  },
  mutations: {
    changeStatus(state) {
      state.userLogged = !state.userLogged;
    },
  },
  actions: {
    changeUserLogStatus(context) {
      context.commit('changeStatus');
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.userLogged;
    },
  },
});
