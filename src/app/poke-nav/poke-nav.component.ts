import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from 'src/interfaces';
import {PokemonService} from 'src/services/pokemon.service'

@Component({
  selector: 'app-poke-nav',
  templateUrl: './poke-nav.component.html',
  styleUrls: ['./poke-nav.component.scss']
})
export class PokeNavComponent implements OnInit {

  name : string;
  data : PokemonDetails ;
  constructor(private pokeService : PokemonService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['id'];
    this.pokeService.getPokemonDetails(this.name).subscribe((data)=> {this.data =data;  console.log(data);});  
  
  }
  private getSprites(): string{
 return this.data.sprites.front_default;
  
    
  }

}
