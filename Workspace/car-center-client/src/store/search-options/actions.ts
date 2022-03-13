import axios from 'axios';
import { SearchOptionsStateInterface } from './state';
import { Actions } from 'vuex-smart-module';
import { SearchOptionsGetters } from './getters';
import { SearchOptionsMutations } from './mutations';
// import { MutationType } from './mutations';
// export enum ActionTypes {
//   GET_SEARCH_OPTIONS = 'GET_SEARCH_OPTIONS'
// }

export interface ServerResponse {
  manufacturers: Manufacturer[];
}

export interface Manufacturer {
  name: string;
  id: string;
}

export interface ManufacturerOption {
  label: string;
  value: string;
}

// type ActionAugments = Omit<ActionContext<SearchOptionsStateInterface, StateInterface>, 'commit'> & {
//   commit<K extends keyof Mutations>(
//     key: K,
//     payload: Parameters<Mutations[K]>[1]
//   ): ReturnType<Mutations[K]>
// }

// export type Actions = {
//   [ActionTypes.GET_SEARCH_OPTIONS](context: ActionAugments): void
// }

// const actions: ActionTree<SearchOptionsStateInterface, StateInterface> & Actions = {
//   async [ActionTypes.GET_SEARCH_OPTIONS]({ commit }) {
//     const { data } = await axios.get<ServerResponse>(
//       'http://localhost:3000/ads/search-options'
//     );
//     const options: ManufacturerOption[] = data.manufacturers.map((manufacturer) => ({
//       label: manufacturer.name,
//       value: manufacturer.id,
//     }));

//     commit(MutationType.SET_SEARCH_OPTIONS, options);

//   },
// };

// export default actions;

export class SearchOptionsActions extends Actions<
  SearchOptionsStateInterface,
  SearchOptionsGetters,
  SearchOptionsMutations,
  SearchOptionsActions> {
  async fetchSearchOptions() {
    const { data } = await axios.get<ServerResponse>(
      'http://localhost:3000/ads/search-options'
    );
    const options: ManufacturerOption[] = data.manufacturers.map((manufacturer) => ({
      label: manufacturer.name,
      value: manufacturer.id,
    }));
    console.log(options);
    this.commit('setSearchOptions', options);
  }
}