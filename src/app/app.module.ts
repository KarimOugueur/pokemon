import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PokemonHeaderComponent} from 'src/components/pokemon-header/pokemon-header.component';
import {PokemonHomepageComponent} from 'src/components/pokemon-homepage/pokemon-homepage.component';
import {TypeFilterPipe} from 'src/pipes/typeFilter.pipe';
import {MaterialModule} from './../modules/material-module';
import {AbilitiesFilterPipe} from './../pipes/abilitiesFilter.pipe';
import {SearchPipe} from './../pipes/search.pipe';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from 'src/components/home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {PokemonAccueilComponent} from 'src/components/pokemon-accueil/pokemon-accueil.component';
import {PokemonPookdexComponent} from 'src/components/pokemon-pookdex/pokemon-pookdex.component';
import {PokeInfoComponent} from 'src/app/poke-info/poke-info.component';
import {RouterModule, Routes} from '@angular/router';
import {PokeNavComponent} from './poke-nav/poke-nav.component';
import {AbilityComponent} from './ability/ability.component';
import {EvolutionFilterPipe} from 'src/pipes/evolution-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonPookdexComponent,
    PokemonHomepageComponent,
    PokemonHeaderComponent,
    PokemonAccueilComponent,
    SearchPipe,
    TypeFilterPipe,
    AbilitiesFilterPipe,
    PokeInfoComponent,
    PokeNavComponent,
    AbilityComponent,
    EvolutionFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
