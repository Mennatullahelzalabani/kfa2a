import { WebsiteServiceService } from './../website-service/website-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  constructor(private websiteService: WebsiteServiceService) {}

  sendData() {
    this.websiteService
      .sendContactData(this.contactForm.value)
      .subscribe((res: any) => {});
  }
  pageTitleValue = {
    title: '   تواصل معنا ',
    text: ' تواصل معنا  ',
  };
}
