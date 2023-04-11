import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceDashboardService } from '../../service-dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { enviroment } from 'src/app/modules/shared/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
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
  senddata() {}

  files: any;
  currentInput: any;
  fileUrl: any = '';
  assetsUrl = enviroment.assetsUrl;
  selectAuthorityLetterUrl($event: any) {
    this.files = $event.target.files[0];
    this.currentInput = $event.target.files[0].name;
    let data = new FormData();
    data.append('File', this.files);

    this.servicedashboard.uploadFile(data).subscribe((res: any) => {
      this.toastr.success('تم رفع الملف بنجاح');
      this.fileUrl = res.fileUrl;
      this.uploadForm.patchValue({
        authorityLetterUrl: res.fileUrl,
      });
    });
  }
}
