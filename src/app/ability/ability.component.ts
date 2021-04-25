import { Component, Input, OnInit } from '@angular/core';
import { Ability } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {
  @Input() name : string;
  @Input() url : string;
  Description : string;
  Ability !: Ability ;
  constructor( private PokeService : PokemonService) { }

  ngOnInit() {
    this.PokeService.getAbility(this.url).subscribe((ability)=> {this.Ability=ability;console.log(ability);});
  }

  getEffect() : string{
  var ret : string ="";

   this.Ability.effect_entries.forEach((EffectEntry)=>{if(EffectEntry.language.name=="en"){ret=EffectEntry.effect}})
    return ret;
  }
  getDescription () : string{
   var ret: string ="";
 this.Ability.flavor_text_entries.forEach((Flavortextentry)=>{if(Flavortextentry.language.name=="en"){ret= Flavortextentry.flavor_text;}});
  return ret;
  }


}
