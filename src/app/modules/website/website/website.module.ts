import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FaqComponent } from '../faq/faq.component';
import { TestersComponent } from '../testers/testers.component';
import { WorkshopsComponent } from '../workshops/workshops.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from '../home-page/home-page.component';

@NgModule({
  declarations: [
    ContactUsComponent,
    FaqComponent,
    WorkshopsComponent,
    TestersComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class WebsiteModule {}
