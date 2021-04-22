import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokeAPI, PokemonDetails, Results, TYPE_COLOURS } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';
import { PokemonServiceInfoPokemonService } from 'src/services/pokemon-service-info-pokemon.service'
@Component({
  selector: 'app-pokemon-filter-type',
  templateUrl: './pokemon-filter-type.component.html',
  styleUrls: ['./pokemon-filter-type.component.scss']
})
export class PokemonFilterTypeComponent implements OnInit {
  @Input('detail')
  detail!: PokemonDetails;

  constructor(private pokemonServiceInfoService:PokemonServiceInfoPokemonService) {
    this.pokemonServiceInfoService.getObservable().subscribe(e => console.log('e ' +e));
  }

  ngOnInit(): void {

  }

}
