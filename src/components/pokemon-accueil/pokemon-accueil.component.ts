import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from 'src/environments/environment';
import {PokeAPI, PokemonDetails, PokemonEvolution, Results, TYPE_COLOURS} from 'src/interfaces';
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
  pokemonAccueilAPI = environment.PokemonaccueilURL;
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
      this.pokemonAccueilAPI = environment.pokemonURL + '/' + name + '/';
      this.getPokemons();
    }
  }

  /**
   * Loads in all 200 Original pokemon and gets
   * their details and species details
   */
  getPokemons(): void {

    this.pokemonService.getData(this.pokemonAccueilAPI).subscribe(data => this.pokemon = data);
  }

  /**
   * maj
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
