import { TestBed } from '@angular/core/testing';

import { ReservationdataService } from './reservationdata.service';

describe('ReservationdataService', () => {
  let service: ReservationdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
