import { AdsState } from './state';
import { Actions } from 'vuex-smart-module';
import { AdsGetters } from './getters';
import { AdsMutations } from './mutations';
import { api } from '../../boot/axios';


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

export class AdsActions extends Actions<
    AdsState,
    AdsGetters,
    AdsMutations,
    AdsActions> {
    async fetchAds() {
        const { data } = await api.get<ServerResponse>(
            'http://localhost:3000/ads'
        );

        console.log(data);

    }
}