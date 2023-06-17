import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss'],
})
export class AuthHeaderComponent implements OnInit {
  ngOnInit(): void {}
  @Input() pageTitle: any;
  viewMenu = false;

  openMenu() {
    this.viewMenu = !this.viewMenu;
  }
  changelang(lang: any) {
    console.log(lang.value);
  }
}
