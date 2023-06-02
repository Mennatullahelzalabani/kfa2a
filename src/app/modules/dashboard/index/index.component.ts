import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  openSide = false;

  constructor(private router: Router) {
    this.router.events.subscribe((res: any) => {
      this.openSide = false;
    });
  }

  toggleSide() {
    this.openSide = !this.openSide;
  }
}
