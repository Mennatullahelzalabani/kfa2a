import { AuthModule } from './modules/auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';

import {
  MatAccordion,
  MatExpansionModule,
  MAT_ACCORDION,
} from '@angular/material/expansion';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import {
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { WebsiteIndexComponent } from './modules/website/website-index/website-index.component';
import { RequestInterceptor } from './modules/shared/request.interceptor';

@NgModule({
  declarations: [AppComponent, WebsiteIndexComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatExpansionModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
