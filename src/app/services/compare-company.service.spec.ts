import { TestBed } from '@angular/core/testing';

import { CompareCompanyService } from './compare-company.service';

describe('CompareCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompareCompanyService = TestBed.get(CompareCompanyService);
    expect(service).toBeTruthy();
  });
});
