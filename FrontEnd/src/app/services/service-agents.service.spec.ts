import { TestBed } from '@angular/core/testing';

import { ServiceAgentsService } from './service-agents.service';

describe('ServiceAgentsService', () => {
  let service: ServiceAgentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAgentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
