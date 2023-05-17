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
  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private loginservice: AuthServiceService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  sendData() {
    this.loginservice.sendData(this.LoginForm.value).subscribe(
      (res: any) => {
        this.toastr.success('تم التسجيل بنجاح');
        this.router.navigate(['/dashboard/profile']);
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('user', JSON.stringify(res.user));
      },
      (err) => {
        this.toastr.error(err.error.messageAr);
      }
    );
  }
  pageTitleValue = {
    title: '  تسجيل الدخول',
    text: 'أهلا بك ،قم بتسجيل الدخول الآن لحسابك علي منصتنا',
  };
}
