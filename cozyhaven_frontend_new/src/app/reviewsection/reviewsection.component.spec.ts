import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsectionComponent } from './reviewsection.component';

describe('ReviewsectionComponent', () => {
  let component: ReviewsectionComponent;
  let fixture: ComponentFixture<ReviewsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
