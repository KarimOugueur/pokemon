
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { PokemonAccueilComponent } from 'src/components/pokemon-accueil/pokemon-accueil.component';
import { PokemonHeaderComponent } from 'src/components/pokemon-header/pokemon-header.component';
import { PokemonPookdexComponent } from 'src/components/pokemon-pookdex/pokemon-pookdex.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'accueil',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pokedex',
    component: PokemonPookdexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
