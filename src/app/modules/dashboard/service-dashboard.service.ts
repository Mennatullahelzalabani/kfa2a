import { Injectable } from '@angular/core';
import { enviroment } from '../shared/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceDashboardService {
  baseURL = enviroment.baseURL;
  constructor(private httpclient: HttpClient) {}
  sendContactData(data: any) {
    return this.httpclient.post(`${this.baseURL}/ContactUs`, data);
  }

  getFactoryData(id: any) {
    return this.httpclient.get(`${this.baseURL}/api/Factory/${id}`);
  }
  uploadFile(data: any) {
    return this.httpclient.post(`${this.baseURL}/UploadFile`, data);
  }
  getAllCountries() {
    return this.httpclient.get(`${this.baseURL}/api/Country/GetAllCountries`);
  }

  getRequestById(reqId: any) {
    return this.httpclient.get(`${this.baseURL}/api/DeviceRequest/${reqId}`);
  }

  saveData(data: any) {
    return this.httpclient.post(
      `${this.baseURL}/api/DeviceRequest/Create`,
      data
    );
  }

  getDevices() {
    return this.httpclient.get(`${this.baseURL}/api/DeviceRequest/list`);
  }
  getDevicesSearch(reqNumber: any) {
    return this.httpclient.get(
      `${this.baseURL}/api/DeviceRequest/list/reqNumber=${reqNumber}`
    );
  }
}
