import { TestBed } from '@angular/core/testing';

import { ReportedIssuesService } from './reported-issues.service';

describe('ReportedIssuesService', () => {
  let service: ReportedIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportedIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
