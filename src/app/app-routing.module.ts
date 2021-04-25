
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { PokemonAccueilComponent } from 'src/components/pokemon-accueil/pokemon-accueil.component';
import { PokemonHeaderComponent } from 'src/components/pokemon-header/pokemon-header.component';
import { PokemonPookdexComponent } from 'src/components/pokemon-pookdex/pokemon-pookdex.component';
import { PokeNavComponent } from './poke-nav/poke-nav.component';

const routes: Routes = [
  { path: 'pokemon/:id', component:PokeNavComponent },
  { path: '', component: HomeComponent },
  {path : 'pokedex', component : PokemonPookdexComponent},
  { path: 'accueil', redirectTo : '/home', pathMatch: 'full'  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
