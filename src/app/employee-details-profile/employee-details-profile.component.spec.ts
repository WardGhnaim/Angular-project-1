import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsProfileComponent } from './employee-details-profile.component';

describe('EmployeeDetailsProfileComponent', () => {
  let component: EmployeeDetailsProfileComponent;
  let fixture: ComponentFixture<EmployeeDetailsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDetailsProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDetailsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
