import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  pageTitleValue = {
    title: '  سياسة الخصوصية',
    text: 'الخصوصية و سرية المعلومات',
  };
}
