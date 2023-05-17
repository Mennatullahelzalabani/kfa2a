import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestDetailsComponent } from './components/request-details/request-details.component';

import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './components/requests/requests.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent,
      },
      {
        path: 'home-dashboard',
        component: HomeDashboardComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'requests',
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
      {
        path: 'edit-profile',
        component: EditProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
