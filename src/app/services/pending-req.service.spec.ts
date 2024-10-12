import { TestBed } from '@angular/core/testing';

import { PendingReqService } from './pending-req.service';

describe('PendingReqService', () => {
  let service: PendingReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
