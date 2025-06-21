import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsearchuserComponent } from './adminsearchuser.component';

describe('AdminsearchuserComponent', () => {
  let component: AdminsearchuserComponent;
  let fixture: ComponentFixture<AdminsearchuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsearchuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsearchuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
