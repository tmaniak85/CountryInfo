import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Countries} from '../domain/Countries';

@Component({
  selector: 'app-main-result',
  templateUrl: './main-result.component.html',
  styleUrls: ['./main-result.component.css']
})
export class MainResultComponent implements OnInit {
  countries: Countries[] = [];

  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
    switch (this.apiHttp.getOption()) {
      case 'Country':
        this.apiHttp.getCountryByName(localStorage.getItem('name')).subscribe(
          r => this.countries = r);
        break;
      case 'Capital':
        this.apiHttp.getCountryByCapitalName(localStorage.getItem('name')).subscribe(
          r => this.countries = r);
        break;
      case  'Currency':
        this.apiHttp.getCountryByCurrency(localStorage.getItem('name')).subscribe(
          r => this.countries = r);
        break;
    }
  }
}
