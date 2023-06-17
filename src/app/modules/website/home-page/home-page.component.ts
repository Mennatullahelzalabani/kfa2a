import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  viewMenu = false;
  lang: any;

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
  }
  openMenu() {
    this.viewMenu = !this.viewMenu;
  }
  // changelang(lang: any) {
  //   localStorage.setItem('lang', lang.value);
  // }
}
