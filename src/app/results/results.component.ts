import {Component, Input, OnInit} from '@angular/core';
import {Countries} from '../domain/Countries';
import {ApiHttpService} from '../api-http.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  countries: Countries[] = [];
  name = this.apiHttp.getName();
  option = this.apiHttp.getOption();

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
