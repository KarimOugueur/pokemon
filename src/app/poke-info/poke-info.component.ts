import { Component, Input, OnInit } from '@angular/core';
import{PokemonService} from 'src/services/pokemon.service'

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent implements OnInit {
   @Input() Name : string = "";


  constructor(private PokeService : PokemonService) { 

  }

  ngOnInit() {
    //ici faire traitemement qd crée component
    console.log("ok");
  //  this.PokeService.getPokemonDetails(this.Name).subscribe((data)=> console.log(data));
  }
  recupname(service : PokemonService){
    this.Name = service.nametopass;
    console.log(service.nametopass);
  }

}
