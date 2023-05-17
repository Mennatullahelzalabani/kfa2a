import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  userInfo: any;
  constructor(private router: Router) {
    this.userInfo = JSON.parse(localStorage.getItem('user') || '');
  }
  logout() {
    this.router.navigate(['/auth/login']);
    localStorage.clear();
  }
}
