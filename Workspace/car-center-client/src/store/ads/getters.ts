import { AdsState } from './state';
import { Getters } from 'vuex-smart-module';

export class AdsGetters extends Getters<AdsState> {
    get ads() {
        return this.state.ads;
    }
}