import { store } from 'quasar/wrappers';
import {
  Module,
  createStore,
  createComposable,
} from 'vuex-smart-module';
import { adsModule } from './ads';
import { searchOptionsModule } from './search-options';

// class RootState {
//   count = 1;
// }

// class RootGetters extends Getters<RootState> {
//   get count() {
//     return this.state.count;
//   }


//   multiply(multiplier: number) {
//     return this.state.count * multiplier;
//   }
// }

// class RootMutations extends Mutations<RootState> {
//   add(payload: number) {
//     this.state.count += payload;
//   }
// }

// This is the config of the root module
// You can define a root state/getters/mutations/actions here
// Or do everything in separate modules

export const root = new Module({
  modules: {
    searchOptions: searchOptionsModule,
    ads: adsModule
  }
});

export default store(function (/* { ssrContext } */) {
  const rootStore = createStore(root, {
    strict: !!process.env.DEBUGGING,
    // plugins: []
    // and other options, normally passed to Vuex `createStore`
  });

  return rootStore;
});

export const useStore = createComposable(root);