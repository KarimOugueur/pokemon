import {Component} from '@angular/core';
import {PokemonService} from 'src/services/pokemon.service';
import {Results} from './../interfaces';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {


  constructor() {
  }

}
