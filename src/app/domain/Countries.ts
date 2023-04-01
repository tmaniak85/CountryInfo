import {Names} from './Names';
import {Flags} from './Flags';
import {Currencies} from './Currencies';
import {Languages} from './Languages';

export class Countries {
  name: Names;
  tld: string[];
  capital: string;
  region: string;
  subregion: string;
  population: string;
  area: string;
  timezones: string;
  borders: string;
  currencies: Currencies;
  languages: Languages;
  flags: Flags;
}
