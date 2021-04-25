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
<<<<<<< HEAD
       {
        label: 'Home',
        link: 'accueil',
=======
      {
        label: 'Home',
        link: 'home',
>>>>>>> 9896e2c2357dc1bd2e43b1d1c99998c6f8e98a5e
        index: 0
      },
      {
        label: 'Pokedex',
        link: 'pokedex',
        index: 1
      }
    ];
  }

  ngOnInit() {
  }
}
