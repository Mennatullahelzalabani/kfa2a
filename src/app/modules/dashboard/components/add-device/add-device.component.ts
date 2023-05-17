import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { enviroment } from 'src/app/modules/shared/config';
import { ServiceDashboardService } from '../../service-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss'],
})
export class AddDeviceComponent implements OnInit {
  assetsUrl = enviroment.assetsUrl;
  currentRequest: any;
  currentRequestId: any;
  deviceFormSubmitted: boolean = false;
  isTrailer: any;
  isEditing: boolean = false;
  isTrailerVal: boolean = false;
  deviceForm = new FormGroup({
    isTrailer: new FormControl('true', Validators.required),
    deviceName: new FormControl('', Validators.required),
    devicDescription: new FormControl('', Validators.required),
    madeIn: new FormControl('', Validators.required),
    testerId: new FormControl('', Validators.required),
    testRequestTypeId: new FormControl('', Validators.required),
    deviceSerial: new FormControl('', Validators.required),
    trailerTypeOther: new FormControl(''),
    tractorTypeOther: new FormControl(''),
    testResult: new FormControl('', Validators.required),
    testReportUrl: new FormControl('', Validators.required),
    isNew: new FormControl(''),
    creatorId: new FormControl(''),
    airBumperIds: new FormControl(''),
    trailerTypeIds: new FormControl(''),
    ratingLevel: new FormControl('', Validators.required),
  });

  checkType: any;
  constructor(
    private dashboardservice: ServiceDashboardService,
    private toastr: ToastrService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params
      .pipe(
        switchMap((res) => {
          if (res['id']) {
            this.currentRequestId = res['id'];
            this.isEditing = true;
            return this.dashboardservice.getRequestById(`${res['id']}`);
          } else return [];
        })
      )

      .subscribe({
        next: (res: any) => {
          this.currentRequest = res.data ? res.data : [];
        },
      });
  }
  ngOnInit(): void {
    this.deviceForm.get('isTrailer')?.valueChanges.subscribe((res: any) => {
      console.log(res);
      if (res == 'true') {
        this.isTrailerVal = false;
      } else {
        this.isTrailerVal = true;
      }
    });
  }

  pageTitleValue = {
    title: ' لوحة التحكم',
    text: 'تسجيل جهاز جديد',
  };

  fileUrl: any = '';
  files: any;
  currentInput: any;
  startLoding: boolean = false;
  selectAuthorityLetterUrl($event: any) {
    this.files = $event.target.files[0];
    this.currentInput = $event.target.files[0].name;
    let data = new FormData();
    data.append('File', this.files);
    this.startLoding = true;
    this.dashboardservice.uploadFile(data).subscribe((res: any) => {
      this.toastr.success('تم رفع الملف بنجاح');
      this.startLoding = false;
      this.fileUrl = res.fileUrl;
      this.deviceForm.patchValue({
        testReportUrl: res.fileUrl,
      });
    });
  }

  checked: boolean = false;

  checkedContract(e: any) {
    console.log(e.checked);
    if (e.checked == true) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
  savedata() {
    let data = {
      isTrailer: Boolean(this.deviceForm.get('isTrailer')?.value),
      deviceName: this.deviceForm.get('deviceName')?.value,
      devicDescription: this.deviceForm.get('devicDescription')?.value,
      madeIn: this.deviceForm.get('madeIn')?.value,
      testerId: this.deviceForm.get('testerId')?.value,
      testRequestTypeId: this.deviceForm.get('testRequestTypeId')?.value,
      deviceSerial: this.deviceForm.get('deviceSerial')?.value,
      trailerTypeOther: this.deviceForm.get('trailerTypeOther')?.value,
      tractorTypeOther: this.deviceForm.get('tractorTypeOther')?.value,
      testResult: this.deviceForm.get('testResult')?.value,
      testReportUrl: this.deviceForm.get('testReportUrl')?.value,
      isNew: true,
      creatorId: 1,
      airBumperIds: [1],
      trailerTypeIds: [1],
      ratingLevel: this.deviceForm.get('ratingLevel')?.value,
    };
    this.dashboardservice.saveData(data).subscribe(
      (res: any) => {
        this.toastr.success('تم التسجيل بنجاح');
      },
      (err) => {
        this.toastr.error(err.error.messageAr);
      }
    );
  }
}
