import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sedr-project';

  constructor(public router: Router) {
    // this.translateservice.setDefaultLang('ar');
    // // this.translateservice.use(localStorage.getItem('lang') || 'ar');
    // translateservice.addLangs(['en', 'ar']);
  }
  // switchLang(lang: string) {
  //   this.translateservice.use(lang);
  // }
  ngOnInit() {}
}
