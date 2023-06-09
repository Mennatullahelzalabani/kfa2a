import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { AuthServiceService } from '../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { enviroment } from '../../shared/config';
import * as moment from 'moment';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  baseUrl: any;
  href: any;
  assetsUrl = enviroment.assetsUrl;
  show: boolean = false;
  firstFormSubmitted: boolean = false;
  secondFormSubmitted: boolean = false;
  thirdFormSubmitted: boolean = false;
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
  });
  secondForm = new FormGroup({
    authorityLetterUrl: new FormControl('', Validators.required),
  });

  thirdForm = new FormGroup({
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
    private authService: AuthServiceService,
    private toastr: ToastrService
  ) {
    this._ActiveRoute.queryParams.subscribe((res: any) => {
      this.checkType = res.registerType;
    });
  }
  ngOnInit() {
    this.getCountries();

    this.href = window.location.href.toString();
    let domain = new URL(this.href);
    this.baseUrl = domain.origin;
  }

  onNextFirst(stepper: MatStepper) {
    this.firstFormSubmitted = true;
    if (this.firstForm.valid) {
      this.firstFormSubmitted = false;
      stepper.next();
    }
  }
  onNextSecond(stepper: MatStepper) {
    this.secondFormSubmitted = true;
    if (this.secondForm.get('authorityLetterUrl')) {
      this.secondFormSubmitted = false;
      stepper.next();
    }
  }
  fileUrl: any = '';
  allCountries: any;

  getCountries() {
    this.authService.getAllCountries().subscribe((res: any) => {
      this.allCountries = res;
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
    this.thirdFormSubmitted = true;

    if (this.thirdForm.invalid) {
      return;
    } else {
      this.thirdFormSubmitted = false;
    }

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
      authorityLetterUrl: this.secondForm.get('authorityLetterUrl')?.value,
      contact1_name: this.thirdForm.get('contact1_name')?.value,
      contact1_phone: this.thirdForm.get('contact1_phone')?.value,
      contact1_email: this.thirdForm.get('contact1_email')?.value,
      contact1_position: this.thirdForm.get('contact1_position')?.value,
      email: this.thirdForm.get('email')?.value,
      password: this.thirdForm.get('password')?.value,
      ClientAppUrl: this.baseUrl,
    };
    this.authService.register(data).subscribe(
      (res: any) => {
        this.toastr.success('تم التسجيل بنجاح');
        this.router.navigate(['/auth/login']);
      },
      (err) => {
        this.toastr.error(err?.error?.messageAr);
      }
    );
  }
  files: any;
  currentInput: any;
  selectAuthorityLetterUrl($event: any) {
    this.files = $event.target.files[0];
    this.currentInput = $event.target.files[0].name;
    let data = new FormData();
    data.append('File', this.files);

    this.authService.uploadFile(data).subscribe((res: any) => {
      this.toastr.success('تم رفع الملف بنجاح');
      this.fileUrl = res.fileUrl;
      this.secondForm.patchValue({
        authorityLetterUrl: res.fileUrl,
      });
    });
  }

  pageTitleValue = {
    title: ' إنشاء حساب',
    text: 'أهلا بك ، قم بإنشاء حساب الشركة المصنعة بتعبئة جميع الحقول المطلوبة بالخطوات التالية',
  };
}
