import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Countries} from './domain/Countries';

const BASE_URL = 'https://restcountries.com';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private httpClient: HttpClient) { }

  getCountryByName(name: string): Observable<Countries[]> {
    return this.httpClient.get<Countries[]>(`${BASE_URL}/v3.1/name/${name}`);
}
  getCountryByCapitalName(name: string): Observable<Countries[]> {
    return this.httpClient.get<Countries[]>(`${BASE_URL}/v3.1/capital/${name}`);
  }
  getCountryByCurrency(name: string): Observable<Countries[]> {
    return this.httpClient.get<Countries[]>(`${BASE_URL}/v3.1/currency/${name}`);
  }
  handleName(r: string): void {
    localStorage.setItem('name', r);
  }
  getName(): string {
    return localStorage.getItem('name');
  }
  handleoption(r: string): void {
    localStorage.setItem('option', r);
  }
  getOption(): string {
    return localStorage.getItem('option');
  }
  setCountry(countryName: string): void {
    localStorage.setItem('countryName', countryName);
  }
  getCountry(): string {
    return localStorage.getItem('countryName');
  }
}
