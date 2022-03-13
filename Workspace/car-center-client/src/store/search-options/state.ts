import { ManufacturerOption } from './actions';

export class SearchOptionsStateInterface {
  manufacturers: ManufacturerOption[] = [];
}

function state(): SearchOptionsStateInterface {
  return {
    manufacturers: [],
  };
}

export default state;
