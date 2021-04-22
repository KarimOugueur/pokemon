import { TestBed } from '@angular/core/testing';

import { PokemonServiceInfoPokemonService } from './pokemon-service-info-pokemon.service';

describe('PokemonServiceInfoPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonServiceInfoPokemonService = TestBed.get(PokemonServiceInfoPokemonService);
    expect(service).toBeTruthy();
  });
});
