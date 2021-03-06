import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {environment} from 'src/environments/environment';
import {PokeAPI, PokemonDetails } from 'src/interfaces';
import {PokemonService} from 'src/services/pokemon.service';


@Component({
  selector: 'app-pokemon-accueil',
  templateUrl: './pokemon-accueil.component.html',
  styleUrls: ['./pokemon-accueil.component.scss'],
  providers: [PokemonService]
})

export class PokemonAccueilComponent implements OnInit {
  @Output() exportPokemons = new EventEmitter();
  @Output() typeSelected = new EventEmitter();

  pokemonDetail!: PokemonDetails;
  pokemons: PokeAPI;
  pokemon: any;
  pokemonURL = 'https://pokeapi.co/api/v2/pokemon'; 
  pokemonAccueilAPI = 'https://pokeapi.co/api/v2/pokemon/growlithe/';
  selectedPokeId = '';
  Name = '';
  bool = false;

  constructor(private http: HttpClient, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  clickme(name: string): void {
    // tslint:disable-next-line:triple-equals
    if (name != '') {
      this.pokemonAccueilAPI = this.pokemonURL + '/' + name + '/';
      this.getPokemons();
    }
  }

  /**
   * Loads  Original pokemon  
   *
   */
  getPokemons(): void {

    this.pokemonService.getData(this.pokemonAccueilAPI).subscribe(data => this.pokemon = data);
  }

  /**
   * get pokemon Details 
   */
  public maj(name: string) {
    this.pokemonService.getPokemonDetails(name).subscribe((data) => console.log(data));
    this.Name = name;
    this.pokemonService.setname(name);
    this.bool = true;

  }

  getName(): string {
    console.log(this.pokemon);
    return this.pokemon.name;


  }


}
