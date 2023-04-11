import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  pageTitleValue = {
    title: 'إنشاء حساب',
    text: 'أهلا بك ،قم بإنشاء حساب الآن عبر اياً من المستخدمين التالين',
  };
}
