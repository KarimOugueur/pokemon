import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ɵBrowserGetTestability } from '@angular/platform-browser';
import { env } from 'process';
import { observable, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Ability, Evolution, Moves, PokeAPI, PokemonDetails, PokemonEvolution} from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokeAPI: any;
  pokeSpeciesAPI: any;
  pokeEvolution:any;
  nametopass : string;
  evo : any;

 
  constructor(private http: HttpClient) {
    this.pokeAPI = environment.pokemonURL;
    this.pokeSpeciesAPI = environment.pokemonSpeciesURL;
    this.pokeEvolution = environment.pokemonEvolutionURl; 
    
  }

  /**
   * Returns 200 pokemons  
   * 
   */
  getPokemon(): Observable<PokeAPI> {
    return this.http
      .get<PokeAPI>(`${this.pokeAPI}?limit=200`)
      .pipe(catchError(this._handleError));
  }
/**
 * 
 * @param url 
 * @returns 
 */
  getData(url:string){
    return this.http.get(url)
 }

  /**
   * Uses pokemon name to retrieve individual pokemon details
   */
  getPokemonDetails(name): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokeAPI}/${name}`)
      .pipe(catchError(this._handleError));
  }
/**
 * Retrives information about pokemon 
 * @param id 
 * @returns 
 */
  getPokemonInfo(id:string): Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(this.pokeAPI + id + '/');
  }

  /**
   * Uses pokemon name to retrieve individual pokemon species details
   */
  getPokemonSpecies(name): Observable<any> {
    return this.http
      .get<any>(`${this.pokeSpeciesAPI}/${name}`)
      .pipe(catchError(this._handleError));
  }

  getPokemonEvolution(name): Observable<PokemonEvolution>{
    return this.http
      .get<PokemonEvolution>(`${this.pokeEvolution}/${name}`)
      .pipe(catchError(this._handleError));
  }

  /**
   * Handles any request error
   */
  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
   setname(name : string) : void {
    this.nametopass = name;
  }
  getPokeEvo(id : any): Observable<Evolution>{
    return this.http.get<Evolution>("https://pokeapi.co/api/v2/evolution-chain/1").pipe(catchError(this._handleError));}
 

  getAbility(url : string ) : Observable<Ability>{
      return this.http.get<Ability>(url);
    }
    getMoves (name :string) : Observable<Moves[]>{
      return this.http.get<Moves[]>(`${this.pokeAPI}/${name}`)
      .pipe(catchError(this._handleError));
    }

  

  }
 
