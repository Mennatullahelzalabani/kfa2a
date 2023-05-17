import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../shared/config';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseURL = enviroment.baseURL;
  constructor(private httpclient: HttpClient) {}

  sendData(loginData: any) {
    return this.httpclient.post(`${this.baseURL}/api/Auth/Login`, loginData);
  }
  send(forgetpassword: any) {
    return this.httpclient.post(
      `${this.baseURL}/Auth/SendResetPasswordEmail`,
      forgetpassword
    );
  }
}
