import { WebsiteServiceService } from './../website-service/website-service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../auth/auth-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactFormSubmitted: boolean = false;
  contactForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  constructor(
    private websiteService: WebsiteServiceService,
    private authService: AuthServiceService
  ) {}

  ngoninit() {
    this.getCountries();
  }

  sendData() {
    this.websiteService
      .sendContactData(this.contactForm.value)
      .subscribe((res: any) => {});

    let data = {
      fullName: this.contactForm.get('fullName')?.value,
      email: this.contactForm.get('email')?.value,
      phone: this.contactForm.get('phone')?.value,
      type: this.contactForm.get('type')?.value,
      body: this.contactForm.get('body')?.value,
    };
  }

  allCountries: any;

  getCountries() {
    this.websiteService.getAllCountries().subscribe((res: any) => {
      this.allCountries = res;
    });
  }
  pageTitleValue = {
    title: '   تواصل معنا ',
    text: ' تواصل معنا  ',
  };
}
