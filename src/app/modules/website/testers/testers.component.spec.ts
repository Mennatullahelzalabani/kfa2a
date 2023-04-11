import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestersComponent } from './testers.component';

describe('TestersComponent', () => {
  let component: TestersComponent;
  let fixture: ComponentFixture<TestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
