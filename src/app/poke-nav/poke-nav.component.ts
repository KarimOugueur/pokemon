import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ability, Evolution, PokemonDetails, PokemonEvolution, Sprites } from 'src/interfaces';
import {PokemonService} from 'src/services/pokemon.service'

@Component({
  selector: 'app-poke-nav',
  templateUrl: './poke-nav.component.html',
  styleUrls: ['./poke-nav.component.scss']
})
export class PokeNavComponent implements OnInit {

  name : string;
  details : PokemonDetails ;
  evolution : PokemonEvolution;
  pokemon : any;
  currentAbility : any;
  Abilities : any[];
  constructor(private pokeService : PokemonService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['id'];
    this.pokeService.getPokemonDetails(this.name).subscribe((data)=> {this.pokemon =data; this.details=data; console.log(data);});  
    
  }
  private getSprites(): Sprites{
    return this.details.sprites;
    
    
  }
  private getEvolve()  : string {
  //  this.pokeService.getPokemonEvolution(this.name).subscribe((evo)=>{console.log(evo.results)});

    console.log(this.evolution.id);
  return "ok";
  }
  private getAbilities() : string{

    return this.details.abilities[0].ability.name;
  }
  private getAbilityUrl() : string
  {  return this.details.abilities[0].ability.url;}
  private getAbilityDescription(url : string) {
    this.pokeService.getAbility(url).subscribe((ability)=>this.currentAbility=ability);
    return this.currentAbility.effect_entries[0].effect;
  }

}
