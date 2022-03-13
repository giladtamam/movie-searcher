
import { Mutations } from 'vuex-smart-module';
import { Ad, AdsState } from './state';

export class AdsMutations extends Mutations<AdsState> {
    setAds(payload: Ad[]) {
        this.state.ads = payload;
    }
}