import { ServiceDashboardService } from './../../service-dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent {
  checkType: any;
  reqInfo: any;
  reqId: any;
  workShopId: any;
  workShopInfo: any;
  id: any;
  reqDetails = new FormGroup({
    isTrailer: new FormControl('true', Validators.required),
    deviceName: new FormControl(''),
    devicDescription: new FormControl(''),
    madeIn: new FormControl(''),
    tester: new FormGroup({
      nameAr: new FormControl(''),
    }),
    testRequestType: new FormGroup({
      nameAr: new FormControl('', Validators.required),
      createdDate: new FormControl('', Validators.required),
      isActive: new FormControl('', Validators.required),
    }),
    deviceSerial: new FormControl('', Validators.required),
    stateId: new FormControl('', Validators.required),
    testResult: new FormControl('', Validators.required),
    deviceNotes: new FormControl('', Validators.required),
    editor: new FormControl('', Validators.required),
    createdDate: new FormControl('', Validators.required),
    creator: new FormGroup({
      nameAr: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      locationUrl: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      contact1_email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    }),
    testReportUrl: new FormControl('', Validators.required),
  });

  // workshopList: any = [
  //   {
  //     nameAr: new FormControl('', Validators.required),
  //     city: new FormControl('', Validators.required),
  //     locationUrl: new FormControl('', Validators.required),
  //     website: new FormControl('', Validators.required),
  //     contact1_email: new FormControl('', Validators.required),
  //     phone: new FormControl('', Validators.required),
  //   },
  // ];
  constructor(
    private dashboardservice: ServiceDashboardService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe((res: any) => {
      this.reqId = res.id;
      // console.log(res.id);
    });
  }

  ngOnInit(): void {
    this.dashboardservice.getRequestById(this.reqId).subscribe((res: any) => {
      this.reqInfo = res;
    });
  }
  pageTitleValue = {
    title: 'لوحة التحكم . الطلبات المقدمة',
    text: '  الطلب رقم #22435 ',
  };
}
