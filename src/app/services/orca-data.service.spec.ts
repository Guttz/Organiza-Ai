import { TestBed, inject } from '@angular/core/testing';

import { OrcaDataService } from './orca-data.service';

describe('OrcaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrcaDataService]
    });
  });

  it('should be created', inject([OrcaDataService], (service: OrcaDataService) => {
    expect(service).toBeTruthy();
  }));
});
