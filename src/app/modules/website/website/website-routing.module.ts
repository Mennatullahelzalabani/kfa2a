import { HomePageComponent } from '../home-page/home-page.component';
import { FaqComponent } from './../faq/faq.component';
import { TestersComponent } from './../testers/testers.component';
import { WorkshopsComponent } from './../workshops/workshops.component';
import { ContactUsComponent } from './../contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteIndexComponent } from '../website-index/website-index.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteIndexComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'workshops', component: WorkshopsComponent },
      { path: 'testers', component: TestersComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
