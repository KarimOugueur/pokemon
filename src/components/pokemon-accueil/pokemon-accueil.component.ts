import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokeAPI } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-accueil',
  templateUrl: './pokemon-accueil.component.html',
  styleUrls: ['./pokemon-accueil.component.scss'],
  providers:  [PokemonService]
})

export class PokemonAccueilComponent implements OnInit {
  @Output() exportPokemons = new EventEmitter();
  @Output() typeSelected = new EventEmitter();

  pokemons: PokeAPI;
  pokemon:any; 
  pokemonAccueilAPI = environment.PokemonaccueilURL;
  selectedPokeId: string = '';

  constructor(private http:HttpClient,private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  clickme(id:string):void {
    if (id !=''){
    this.pokemonAccueilAPI = environment.pokemonURL+'/'+id+'/'; 
    this.getPokemons();

    }   
  }

  /**
   * Loads in all Original pokemon
   * 
   */
  getPokemons(): void {
 
      this.pokemonService.getData(this.pokemonAccueilAPI).subscribe(data=>this.pokemon=data); 
  }
 
}
