import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website-index',
  templateUrl: './website-index.component.html',
  styleUrls: ['./website-index.component.scss'],
})
export class WebsiteIndexComponent {
  constructor(public router: Router) {}
}
