import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbyadminComponent } from './hotelbyadmin.component';

describe('HotelbyadminComponent', () => {
  let component: HotelbyadminComponent;
  let fixture: ComponentFixture<HotelbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
