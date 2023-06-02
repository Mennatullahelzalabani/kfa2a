import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceDashboardService } from '../../service-dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { enviroment } from 'src/app/modules/shared/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userId: any;
  userInfo: any;
  assetsUrl = enviroment.assetsUrl;
  uploadForm = new FormGroup({
    authorityLetterUrl: new FormControl('', Validators.required),
  });
  constructor(
    private servicedashboard: ServiceDashboardService,
    private toastr: ToastrService
  ) {}
  pageTitleValue = {
    title: 'لوحة التحكم',
    text: 'الملف الشخصي ',
  };

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user') || '').businessId;
    this.servicedashboard.getFactoryData(this.userId).subscribe((res: any) => {
      this.userInfo = res;
      console.log(this.userInfo);
    });
  }
}
