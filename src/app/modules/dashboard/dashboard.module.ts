import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TableTabsComponent } from './components/table-tabs/table-tabs.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { RequestDetailsComponent } from './components/request-details/request-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RequestsComponent } from './components/requests/requests.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IndexComponent,
    SideMenuComponent,
    HomeDashboardComponent,
    HeaderDashboardComponent,
    TableTabsComponent,
    ProfileComponent,

    RequestDetailsComponent,
    RequestsComponent,
    AddDeviceComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    SharedModule,
    MatMenuModule,
  ],
})
export class DashboardModule {}
