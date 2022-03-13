import { SearchOptionsStateInterface } from './state';
import { Getters } from 'vuex-smart-module';
// const getters: GetterTree<SearchOptionsStateInterface, StateInterface> = {
//   someAction(/* context */) {
//     // your code
//   },
// };

// export default getters;

export class SearchOptionsGetters extends Getters<SearchOptionsStateInterface> {
  get manufacturers() {
    return this.state.manufacturers;
  }
}
