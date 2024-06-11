import { TestBed } from '@angular/core/testing';

import { ScheduleTransferService } from './schedule-transfer.service';

describe('ScheduleTransferService', () => {
  let service: ScheduleTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
