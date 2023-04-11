import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../shared/config';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseURL = enviroment.baseURL;

  constructor(private httpClient: HttpClient) {}

  uploadFile(data: any) {
    return this.httpClient.post(`${this.baseURL}/UploadFile`, data);
  }
  register(data: any) {
    return this.httpClient.post(`${this.baseURL}/api/Register/Factory`, data);
  }
}
