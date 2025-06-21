import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminownerComponent } from './adminowner.component';

describe('AdminownerComponent', () => {
  let component: AdminownerComponent;
  let fixture: ComponentFixture<AdminownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminownerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
