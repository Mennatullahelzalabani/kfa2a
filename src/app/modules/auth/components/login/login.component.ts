import { Router } from '@angular/router';
import { AuthServiceService } from './../../auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailPattern = '[a-z0-9._%+-]{1,}@[a-z0-9.-]{2,}[.]{1}[a-z]{2,}$';

  LoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.pattern(this.emailPattern),
      Validators.required,
    ]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private loginservice: AuthServiceService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  sendData() {
    this.router.navigate(['/dashboard']);
    // this.loginservice.sendData(this.LoginForm.value).subscribe(
    //   (res: any) => {
    //     this.toastr.success('تم التسجيل بنجاح');
    //   },
    //   (err) => {
    //     this.toastr.error(err.error.messageAr);
    //   }
    // );
  }
  pageTitleValue = {
    title: '  تسجيل الدخول',
    text: 'أهلا بك ،قم بتسجيل الدخول الآن لحسابك علي منصتنا',
  };
}
