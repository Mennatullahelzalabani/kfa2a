import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sedr-project';

  constructor(
    public router: Router,
    private translateservice: TranslateService
  ) {
    // this.translateservice.setDefaultLang('ar');
    // // this.translateservice.use(localStorage.getItem('lang') || 'ar');
    // translateservice.addLangs(['en', 'ar']);
  }
  // switchLang(lang: string) {
  //   this.translateservice.use(lang);
  // }
  ngOnInit() {}
}
