import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceDashboardService } from '../../service-dashboard.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { enviroment } from 'src/app/modules/shared/config';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  devicelist: any = [
    {
      id: new FormControl(''),
    },
    { isTrailer: new FormControl('') },
    { deviceName: new FormControl('') },
    { devicDescription: new FormControl('') },
    { madeIn: new FormControl('') },
    { testerId: new FormControl('') },
  ];

  filterForm = new FormGroup({
    reqNumber: new FormControl(''),
    stateId: new FormControl(''),
    dateFrom: new FormControl(''),
    dateTo: new FormControl(''),
    isNew: new FormControl(''),
    isTrailer: new FormControl(''),
    factoryName: new FormControl(''),
    deviceName: new FormControl(''),
    VehicleVIN: new FormControl(''),
  });

  constructor(private dashboardservice: ServiceDashboardService) {}

  ngOnInit(): void {
    this.dashboardservice.getDevices().subscribe((res: any) => {
      this.devicelist = res.items;
    });
  }

  pageTitleValue = {
    title: 'لوحة التحكم',
    text: ' الطلبات المقدمة  ',
  };
}
