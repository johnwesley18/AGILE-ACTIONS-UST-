import { TestBed } from '@angular/core/testing';

import { ReworkRequestsService } from './rework-requests.service';

describe('ReworkRequestsService', () => {
  let service: ReworkRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReworkRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
