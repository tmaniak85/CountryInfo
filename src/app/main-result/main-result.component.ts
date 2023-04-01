import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Countries} from '../domain/Countries';

@Component({
  selector: 'app-main-result',
  templateUrl: './main-result.component.html',
  styleUrls: ['./main-result.component.css']
})
export class MainResultComponent implements OnInit {
  searchedCountry: Countries;
  currencies: string[] = [];
  languages: string[] = [];

  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
    switch (this.apiHttp.getOption()) {
      case 'Country':
        this.apiHttp.getCountryByName(localStorage.getItem('name')).subscribe(
          r => this.getSearchedCountryFromCountries(r));
        break;
      case 'Capital':
        this.apiHttp.getCountryByCapitalName(localStorage.getItem('name')).subscribe(
          r => this.getSearchedCountryFromCountries(r));
        break;
      case  'Currency':
        this.apiHttp.getCountryByCurrency(localStorage.getItem('name')).subscribe(
          r => this.getSearchedCountryFromCountries(r));
        break;
    }
  }

  getSearchedCountryFromCountries(countries: Countries[]): void {
    this.searchedCountry = countries.find(country => country.name.official === this.apiHttp.getCountry());
    this.getCurrencyNameFromCurrencies();
    this.getLanguageFromLanguages();
  }

  getCurrencyNameFromCurrencies(): void {
    Object.entries(this.searchedCountry.currencies ?? {}).forEach(([key, value]) => {
      this.currencies.push(value.name);
    });
  }

  getLanguageFromLanguages(): void {
    Object.entries(this.searchedCountry.languages ?? {}).forEach(([key, value]) => {
      this.languages.push(value);
    });
  }
}
