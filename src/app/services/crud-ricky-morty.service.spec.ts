import { TestBed } from '@angular/core/testing';

import { CrudRickyMortyService } from './crud-ricky-morty.service';

describe('CrudRickyMortyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudRickyMortyService = TestBed.get(CrudRickyMortyService);
    expect(service).toBeTruthy();
  });
});
