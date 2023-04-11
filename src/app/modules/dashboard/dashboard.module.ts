import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TableTabsComponent } from './components/table-tabs/table-tabs.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    SideMenuComponent,
    PageTitleComponent,
    HomeDashboardComponent,
    HeaderDashboardComponent,
    TableTabsComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
