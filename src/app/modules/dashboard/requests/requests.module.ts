import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { AddDeviceComponent } from './add-device/add-device.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestsComponent } from './requests/requests.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardModule } from '../dashboard.module';

@NgModule({
  declarations: [
    RequestDetailsComponent,
    RequestsComponent,
    AddDeviceComponent,
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
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
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCheckboxModule,
    DashboardModule,
  ],
})
export class RequestsModule {}
