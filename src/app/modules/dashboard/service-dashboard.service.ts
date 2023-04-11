import { Injectable } from '@angular/core';
import { enviroment } from '../shared/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceDashboardService {
  baseURL = enviroment.baseURL;
  constructor(private httpclient: HttpClient) {}
  uploadFile(data: any) {
    return this.httpclient.post(`${this.baseURL}/UploadFile`, data);
  }
}
