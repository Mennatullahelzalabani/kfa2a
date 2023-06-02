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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IndexComponent,
    SideMenuComponent,
    HomeDashboardComponent,
    HeaderDashboardComponent,
    TableTabsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    SharedModule,
    MatMenuModule,
  ],
  exports: [HeaderDashboardComponent],
})
export class DashboardModule {}
