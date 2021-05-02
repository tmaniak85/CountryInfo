import {Currencies} from './Currencies';
import {Languages} from './Languages';

export class Countries {
  name: string;
  topLevelDomain: string;
  capital: string;
  region: string;
  subregion: string;
  population: string;
  area: string;
  timezones: string;
  borders: string;
  currencies: Currencies[];
  languages: Languages[];
  flag: string;
}
