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
  ability:   Species;
  is_hidden: boolean;
  slot:      number;
}

export interface Species {
  name: string;
  url:  string;
}

export interface PokemonDetails {
  name: string;
  id: number;
  sprites: Sprites;
  abilities?: Array<any>;
  types?: Array<any>;
  abilitiess:Ability[];
  
}

export interface PokemonEvolution {
  name : string; 
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
  evolution : PokemonEvolution; 
}



export interface Sprites {
  front_default: string;
}
