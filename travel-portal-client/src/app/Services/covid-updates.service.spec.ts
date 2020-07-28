import { TestBed } from '@angular/core/testing';

import { CovidUpdatesService } from './covid-updates.service';

describe('CovidUpdatesService', () => {
  let service: CovidUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
