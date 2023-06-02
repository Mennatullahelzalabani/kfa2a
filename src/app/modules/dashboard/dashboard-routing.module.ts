import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { RequestDetailsComponent } from './requests/request-details/request-details.component';

import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './requests/requests/requests.component';
import { AddDeviceComponent } from './requests/add-device/add-device.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

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
        loadChildren: () =>
          import('../dashboard/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('../dashboard/requests/requests.module').then(
            (m) => m.RequestsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
