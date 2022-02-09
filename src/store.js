import { createStore } from 'vuex';

import productsModule from './store/modules/products';
import cartModule from './store/modules/cart';

export default createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
});
