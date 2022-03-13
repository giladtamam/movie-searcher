import { AdsGetters } from './getters';
// import { SearchOptionsMutations } from './mutations';
import {
    Module, createComposable
} from 'vuex-smart-module';
// import { SearchOptionsActions } from './actions';
import { AdsState } from './state';
import { AdsActions } from './actions';
import { AdsMutations } from './mutations';

const adsConfig = {
    namespaced: true,
    actions: AdsActions,
    getters: AdsGetters,
    mutations: AdsMutations,
    state: AdsState,
};

export const adsModule = new Module(adsConfig);

export const useAds = createComposable(adsModule)