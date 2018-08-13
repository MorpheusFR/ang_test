import { TestBed, inject } from '@angular/core/testing';

import { ClientsService } from './client.service';

describe('ClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsService]
    });
  });

  it('should be created', inject([ClientsService], (service: ClientsService) => {
    expect(service).toBeTruthy();
  }));
});
