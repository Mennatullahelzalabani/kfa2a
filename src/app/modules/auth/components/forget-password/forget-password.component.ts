import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  emailPattern = '[a-z0-9._%+-]{1,}@[a-z0-9.-]{2,}[.]{1}[a-z]{2,}$';
  forgetpasswordForm = new FormGroup({
    email: new FormControl('', [
      Validators.pattern(this.emailPattern),
      Validators.required,
    ]),
    clientAppUrl: new FormControl(''),
  });

  constructor(
    private forgetpasswordservice: AuthServiceService,
    private toastr: ToastrService
  ) {}
  send() {}
  pageTitleValue = {
    title: '   استعادة كلمة المرور',
    text: 'أهلا بك ،يجب ادخال البريد الإلكتروني المسجل لدينا لإرسال رابط إعادة تعيين كلمة المرور',
  };
}
