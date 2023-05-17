import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../shared/config';

@Injectable({
  providedIn: 'root',
})
export class WebsiteServiceService {
  baseURL = enviroment.baseURL;

  constructor(private httpClient: HttpClient) {}

  sendContactData(data: any) {
    return this.httpClient.post(`${this.baseURL}/ContactUs`, data);
  }
  getAllCountries() {
    return this.httpClient.get(`${this.baseURL}/api/Country/GetAllCountries`);
  }
}
