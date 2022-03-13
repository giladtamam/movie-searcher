
export interface Ad {
    id: string;
    price: number;
}

export class AdsState {
    ads: Ad[] = [];
}

function state(): AdsState {
    return {
        ads: [],
    };
}

export default state;
