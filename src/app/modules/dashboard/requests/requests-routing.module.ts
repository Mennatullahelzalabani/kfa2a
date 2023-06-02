import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeviceComponent } from './add-device/add-device.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsComponent,
  },

  {
    path: 'request-details/:id',
    component: RequestDetailsComponent,
  },
  {
    path: 'add-device',
    component: AddDeviceComponent,
  },
  {
    path: 'add-device/:id',
    component: AddDeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsRoutingModule {}
