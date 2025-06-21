import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsearchownerComponent } from './adminsearchowner.component';

describe('AdminsearchownerComponent', () => {
  let component: AdminsearchownerComponent;
  let fixture: ComponentFixture<AdminsearchownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsearchownerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsearchownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
