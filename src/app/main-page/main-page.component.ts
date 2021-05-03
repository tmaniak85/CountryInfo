import {Component, OnInit} from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  notFound = false;
  name = '';

  constructor(private apiHttp: ApiHttpService, private router: Router) {
  }

  showCountriesByName(): void {
    this.apiHttp.handleName(this.name);
    this.apiHttp.handleoption('Country');
    this.apiHttp.getCountryByName(localStorage.getItem('name')).subscribe(
      () => this.router.navigate(['results']),
      e => {
        if (e.status === 404) {
          this.notFound = true;
        }
      }
    );
  }
  showCountriesByCapitalName(): void {
    this.apiHttp.handleName(this.name);
    this.apiHttp.handleoption('Capital');
    this.apiHttp.getCountryByCapitalName(localStorage.getItem('name')).subscribe(
      () => this.router.navigate(['results']),
      e => {
        if (e.status === 404) {
          this.notFound = true;
        }
      }
    );
  }
  showCountriesByCurrency(): void {
    this.apiHttp.handleName(this.name);
    this.apiHttp.handleoption('Currency');
    this.apiHttp.getCountryByCurrency(localStorage.getItem('name')).subscribe(
      () => this.router.navigate(['results']),
      e => {
        if (e.status === 404 || e.status === 400) {
          this.notFound = true;
        }
      }
    );
  }
  handleClear(): void {
    this.name = '';
  }

  ngOnInit(): void {
  }
}
