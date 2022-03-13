import { SearchOptionsGetters } from './getters';
import { SearchOptionsMutations } from './mutations';
import {
  Module, createComposable
} from 'vuex-smart-module';
import { SearchOptionsActions } from './actions';
import { SearchOptionsStateInterface } from './state';

//const searchOptionsModule: Module<SearchOptionsStateInterface, StateInterface> = {
const searchOptionsConfig = {
  namespaced: true,
  actions: SearchOptionsActions,
  getters: SearchOptionsGetters,
  mutations: SearchOptionsMutations,
  state: SearchOptionsStateInterface,
};

export const searchOptionsModule = new Module(searchOptionsConfig);

export const useSearchOptions = createComposable(searchOptionsModule)