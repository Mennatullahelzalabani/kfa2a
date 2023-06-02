import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss'],
})
export class AuthHeaderComponent {
  @Input() pageTitle: any;
  viewMenu = false;

  openMenu() {
    this.viewMenu = !this.viewMenu;
  }
}
