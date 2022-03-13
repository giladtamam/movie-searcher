// import { MutationTree } from 'vuex';
// import { ManufacturerOption } from './actions';
// import { SearchOptionsStateInterface } from './state';
import { Mutations } from 'vuex-smart-module';
import { ManufacturerOption } from './actions';
import { SearchOptionsStateInterface } from './state';

// export enum MutationType {
//   SET_SEARCH_OPTIONS = 'SET_SEARCH_OPTIONS',
// }

// export type Mutations = {
//   [MutationType.SET_SEARCH_OPTIONS](state: SearchOptionsStateInterface, manufacturers: ManufacturerOption[]): void
// }

// const mutation: MutationTree<SearchOptionsStateInterface> & Mutations = {
//   [MutationType.SET_SEARCH_OPTIONS](state: SearchOptionsStateInterface, payload: ManufacturerOption[]) {
//     return {
//       ...state,
//       manufacturer: payload
//     }
//   }
// };

// export default mutation;
export class SearchOptionsMutations extends Mutations<SearchOptionsStateInterface> {
  setSearchOptions(payload: ManufacturerOption[]) {
    this.state.manufacturers = payload;
  }
}