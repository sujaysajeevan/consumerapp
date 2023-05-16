import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerManagementComponent } from './consumer-management.component';

describe('ConsumerManagementComponent', () => {
  let component: ConsumerManagementComponent;
  let fixture: ComponentFixture<ConsumerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
