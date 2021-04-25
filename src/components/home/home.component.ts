import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navLinks: any[];

  constructor() {
    this.navLinks = [

      {
        label: 'Home',
        link: 'accueil',
      },
      {
        label: 'Pokedex',
        link: 'pokedex',
        index: 1
      }
    ];
  }

  ngOnInit(): void {}
}
