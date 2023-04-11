import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AuthHeaderComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [AuthHeaderComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
