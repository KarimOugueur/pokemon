/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';

describe('Service: Pokemon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService]
    });
  });
  
  /* test */
  it('should ...', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});
