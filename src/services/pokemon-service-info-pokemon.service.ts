import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceInfoPokemonService {
  public subjectObeservable= new  Subject<string>();

  constructor() { }


/***
 * Recopier du tp1
 * créer un sujet d'observable (subjectObeservable)
 * créer un observable pour et récupérer le sujet (getObservable)
 * mettre a jour la valuer du sujet
 */

  setVelue(v:string){
    this.subjectObeservable.next(v);
  }

  getObservable():Subject<string> {
    return this.subjectObeservable;
  }

}
