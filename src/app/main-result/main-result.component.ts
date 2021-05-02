import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Countries} from '../domain/Countries';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-result',
  templateUrl: './main-result.component.html',
  styleUrls: ['./main-result.component.css']
})
export class MainResultComponent implements OnInit {
  countries: Countries[] = [];

  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
    if (this.apiHttp.getOption() === 'Country') {
      this.apiHttp.getCountryByName(localStorage.getItem('name')).subscribe(
        r => this.countries = r);
    }
    if (this.apiHttp.getOption() === 'Capital') {
      this.apiHttp.getCountryByCapitalName(localStorage.getItem('name')).subscribe(
        r => this.countries = r);
    }
    if (this.apiHttp.getOption() === 'Currency') {
      this.apiHttp.getCountryByCurrency(localStorage.getItem('name')).subscribe(
        r => this.countries = r);
    }
  }
}
