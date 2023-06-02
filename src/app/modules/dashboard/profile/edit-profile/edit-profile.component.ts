import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/modules/auth/auth-service.service';
import { ServiceDashboardService } from '../../service-dashboard.service';
import { enviroment } from 'src/app/modules/shared/config';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  pageTitleValue = {
    title: 'لوحة التحكم ',
    text: 'الملف الشخصي',
  };
  baseUrl: any;
  href: any;
  assetsUrl = enviroment.assetsUrl;
  show: boolean = false;
  isSaudi: any;
  firstForm = new FormGroup({
    isSaudi: new FormControl('', Validators.required),
    nameAr: new FormControl('', Validators.required),
    nameEn: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    fax: new FormControl('', Validators.required),
    poBox: new FormControl('', Validators.required),
    commercialRegisterstring: new FormControl('', Validators.required),
    commercialRegisterstringEndDate: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    countryId: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    website: new FormControl(''),
    authorityLetterUrl: new FormControl('', Validators.required),
    contact1_name: new FormControl('', Validators.required),
    contact1_phone: new FormControl('', Validators.required),
    contact1_email: new FormControl('', Validators.required),
    contact1_position: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  checkType: any;
  constructor(
    private router: Router,
    private _ActiveRoute: ActivatedRoute,
    private dashboardService: ServiceDashboardService,
    private toastr: ToastrService
  ) {
    this._ActiveRoute.queryParams.subscribe((res: any) => {
      this.checkType = res.registerType;
    });
  }
  ngOnInit() {
    this.href = window.location.href.toString();
    let domain = new URL(this.href);
    this.baseUrl = domain.origin;
    let userId = JSON.parse(localStorage.getItem('user') || '').businessId;

    this.dashboardService.getFactoryData(userId).subscribe((res: any) => {
      this.firstForm.patchValue({
        nameAr: res.nameAr,
      });
    });
  }
  getRadioVal(e: any) {
    if (e == 1) {
      this.isSaudi = true;
    } else {
      this.isSaudi = false;
    }
  }
  sendData() {
    this.firstForm.patchValue({
      commercialRegisterstringEndDate: moment(
        this.firstForm.get('commercialRegisterstringEndDate')?.value
      ).format('YYYY-MM-DD'),
    });

    let data = {
      nameAr: this.firstForm.get('nameAr')?.value,
      isSaudi: this.isSaudi,
      nameEn: this.firstForm.get('nameEn')?.value,
      phone: this.firstForm.get('phone')?.value,
      fax: this.firstForm.get('fax')?.value,
      poBox: this.firstForm.get('poBox')?.value,
      commercialRegisterstringEndDate: this.firstForm.get(
        'commercialRegisterstringEndDate'
      )?.value,
      postcode: this.firstForm.get('postcode')?.value,
      countryId: this.firstForm.get('countryId')?.value,
      city: this.firstForm.get('city')?.value,
      address: this.firstForm.get('address')?.value,
      website: this.firstForm.get('website')?.value,
      authorityLetterUrl: this.firstForm.get('authorityLetterUrl')?.value,
      contact1_name: this.firstForm.get('contact1_name')?.value,
      contact1_phone: this.firstForm.get('contact1_phone')?.value,
      contact1_email: this.firstForm.get('contact1_email')?.value,
      contact1_position: this.firstForm.get('contact1_position')?.value,
      email: this.firstForm.get('email')?.value,
      password: this.firstForm.get('password')?.value,
    };
    // this.dashboardService.register(data).subscribe(
    //   (res: any) => {
    //     this.toastr.success('تم التسجيل بنجاح');
    //     this.router.navigate(['/auth/login']);
    //   },
    //   (err) => {
    //     this.toastr.error(err?.error?.messageAr);
    //   }
    // );
  }
  fileUrl: any = '';
  allCountries: any;
  files: any;
  currentInput: any;

  selectAuthorityLetterUrl($event: any) {
    this.files = $event.target.files[0];
    this.currentInput = $event.target.files[0].name;
    let data = new FormData();
    data.append('File', this.files);

    this.dashboardService.uploadFile(data).subscribe((res: any) => {
      this.toastr.success('تم رفع الملف بنجاح');
      this.fileUrl = res.fileUrl;
      this.firstForm.patchValue({
        authorityLetterUrl: res.fileUrl,
      });
    });
  }
}
