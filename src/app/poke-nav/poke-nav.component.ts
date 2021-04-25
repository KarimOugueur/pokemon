import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ability, Evolution, Moves, PokemonDetails, PokemonEvolution, Sprites } from 'src/interfaces';
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
  display : boolean = false;




  constructor(private pokeService : PokemonService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['id'];
    this.pokeService.getPokemonDetails(this.name).subscribe((data)=> { this.details=data;console.log(data);});  
    this.pokeService.getMoves(this.name).subscribe();
  }
  private getSprites(): Sprites{
    return this.details.sprites;
    
    
  }
  displayer() : void {
    this.display=!this.display;
  }

}
