export enum TYPE_COLOURS {
  ground = 'D3B357',
  ice = 'A3E7FD',
  normal = 'C8C4BC',
  poison = '934594',
  psychic = 'ED4882',
  rock = 'B5B5C3',
  steel = 'B9A156',
  water = 'F4B1F4',
  bug = 'B1C12E',
  dark = '6060B2',
  dragon = '755EDF',
  electric = 'F8D030',
  fairy = '3295F6',
  fighting = '82351D',
  fire = 'E73B0C',
  flying = 'A3B3F7',
  ghost = '4F3A2D',
  grass = '74C236'

}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  id: number;
  sprites: Sprites;
  abilities?: Array<any>;
  types?: Array<any>;
  moves: Moves[]

}

export interface PokemonEvolution {
  name: string;
  id: number;
  results: Results[];

}


export interface PokeAPI {
  count: number;
  next: string;
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
  id?: string;
  details?: PokemonDetails;
  description?: string;
  evolution: PokemonEvolution;
}


export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Evolution {
  baby_trigger_item: any;
  chain: Chain;
  id: number;
}

export interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: Species;
}

export interface EvolutionDetail {
  gender: string;

  item: any;

  location: any

  needs_overworld_rain: boolean;
  party_species: any;
  party_type: any;
  relative_physical_stats: any;
  time_of_day: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Ability {
  effect_changes: any[];
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: Generation;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon: Pokemon[];
}

export interface EffectEntry {
  effect: string;
  language: Generation;
  short_effect: string;
}

export interface Generation {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Generation;
  version_group: Generation;
}

export interface Name {
  language: Generation;
  name: string;
}

export interface Pokemon {
  is_hidden: boolean;
  pokemon: Generation;
  slot: number;
}

export interface Moves {
  name: string;
  url: string;
}
