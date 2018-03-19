import { TestBed, inject } from '@angular/core/testing';

import { SocketComunicator } from './socketComunicator.service';

describe('SocketComunicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketComunicator]
    });
  });

  it('should be created', inject([SocketComunicator], (service: SocketComunicator) => {
    expect(service).toBeTruthy();
  }));
});
