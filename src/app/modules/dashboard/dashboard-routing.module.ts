import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
