import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokeAPI, PokemonDetails, Results, TYPE_COLOURS } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-homepage',
  templateUrl: './pokemon-homepage.component.html',
  styleUrls: ['./pokemon-homepage.component.scss']
})
export class PokemonHomepageComponent implements OnInit {
  @Output() exportPokemons = new EventEmitter();
  @Output() typeSelected = new EventEmitter();
 
  pokemonsLoaded: boolean;
  pokemons: PokeAPI;
  query: string;
  abilityFilters: Array<string>;
  typeFilters: string;
  currentType: String; 
  types: Array<string>;
  pokemonList: Array<Results>;
  
  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  @Input() set typeFilter(type: string) {
    if (type !== this.typeFilter) {
      this.typeFilters = type;
    }
  }

  @Input() set abilityFilter(abilities: Array<string>) {
    if (abilities !== this.abilityFilters) {
      this.abilityFilters = abilities;
    }
  }

  @Input() set pokemonsType(pokemons: Results[]) {
    if (pokemons !== this.pokemonList) {
      this.pokemonList = pokemons;
      this.pokemonList.forEach(pokemon => {
        this.setPokemonTypes(pokemon);
      });
    }
  }

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonsLoaded = false;
    this.types = [];
    this.getPokemons();
  }

  /**
   * Loads in all 200 Original pokemon and gets
   * their details and species details
   */
  getPokemons(): void {
    this.pokemonService.getPokemon().subscribe((data: PokeAPI) => {
      this.pokemons = data;

      if (this.pokemons.results && this.pokemons.results.length) {
        // get pokemon details for every pokemon
        this.pokemons.results.forEach(pokemon => {
          // set pokemon id
          pokemon.id = pokemon.url.split('/')[
            pokemon.url.split('/').length - 2
          ];

          this.getPokemonDetails(pokemon);
          this.getPokemonSpeciesDetails(pokemon);
        });
      }
    });
  }

  /**
   * Gets and sets a pokemons details
   */
  getPokemonDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonDetails(pokemon.name)
      .subscribe((details: PokemonDetails) => {
        pokemon.details = details;
        
        // when last pokemon details have been loaded
        // send pokemons to header component
        if (pokemon.id === '200') {
          this.pokemonsLoaded = true;
          this.exportPokemons.emit(this.pokemons.results);
        }
      });
  }

  getPokemonSpeciesDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonSpecies(pokemon.name)
      .subscribe((species: any) => {
        const entries = species.flavor_text_entries;
        if (entries) {
          entries.some(flavor => {
            if (flavor.language.name === 'en') {
              pokemon.description = flavor.flavor_text;
            }
          });
        }
      });
  }

 /**
   * Called when a type has been selected
   */
  onTypeSelected(): void {
    if (this.currentType) {
      this.typeSelected.emit(this.currentType);
    } else {
      this.typeSelected.emit('');
    }
  }

  /**
   * Grabs a pokemons types and adds to array
   */
  setPokemonTypes(pokemon: Results): void {
    if (pokemon) {
      pokemon.details.types.forEach(type => {
        const typeName = type.type.name;
        if (!this.types.includes(typeName)) {
          this.types.push(typeName);
          this.types.sort();
        }
      });
    }
  }

  /**
   * returns colour based on type mapped
   * in TYPE_COLOURS interface
   */
  getTypeColour(type: string): string {
    if (type) {
      return '#' + TYPE_COLOURS[type];
    }
  }

}
