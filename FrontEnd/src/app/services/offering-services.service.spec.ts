import { TestBed } from '@angular/core/testing';

import { OfferingServicesService } from './offering-services.service';

describe('OfferingServicesService', () => {
  let service: OfferingServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferingServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
