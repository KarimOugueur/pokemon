import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokeAPI, PokemonDetails, PokemonEvolution, Results, TYPE_COLOURS } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';
import { PokemonServiceInfoPokemonService } from 'src/services/pokemon-service-info-pokemon.service'
@Component({
  selector: 'app-pokemon-accueil',
  templateUrl: './pokemon-accueil.component.html',
  styleUrls: ['./pokemon-accueil.component.scss'],
  providers:  [PokemonService]
})

export class PokemonAccueilComponent implements OnInit {
  @Output() exportPokemons = new EventEmitter();
  @Output() typeSelected = new EventEmitter();

  pokemonDetail!: PokemonDetails;
  pokemons: PokeAPI;
  pokemon: any;
  pokemonAccueilAPI = environment.PokemonaccueilURL;
  selectedPokeId: string = '';


  Name : string = "";
  bool : boolean =false;

  constructor(private http:HttpClient,private pokemonService: PokemonService, private pokemonServiceInfo: PokemonServiceInfoPokemonService) {}
  constructor(private http:HttpClient,private pokemonService: PokemonService) {}

  Name : string = "";
  bool : boolean =false;

  ngOnInit(): void {
    this.getPokemons();
  }

  clickme(name:string):void {
    if (name !=''){
      this.pokemonAccueilAPI = environment.pokemonURL+'/'+name+'/';
      this.getPokemons();
      this.pokemonService.getPokemonInfo(name).subscribe((data)=> this.pokemonDetail= data);
      this.pokemonServiceInfo.setVelue(name);
    }
  }

  /**
   * Loads in all 200 Original pokemon and gets
   * their details and species details
   */
  getPokemons(): void {

      this.pokemonService.getData(this.pokemonAccueilAPI).subscribe(data=>this.pokemon=data);
  }
/**
 * maj
 */
public maj(name : string) {
  this.pokemonService.getPokemonDetails(name).subscribe((data)=> console.log(data));
  this.Name=name;
  this.pokemonService.setname(name);
  this.bool = true;

}
getName() : string {
  console.log(this.pokemon);
  return this.pokemon.name;


}


}
