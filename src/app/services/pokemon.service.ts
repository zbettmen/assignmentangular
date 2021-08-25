import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import {Injectable} from '@angular/core'
import { Pokemon, Pokemonobj } from '../models/pokemon.model'

@Injectable({
    providedIn: 'root'
})
export class PokemonService{
    private _pokemons: Pokemonobj | null = null;
    private _error: string = '';
    public mypokemon: Pokemon[] = [];

    constructor(private readonly http: HttpClient){

    }
    public fetchPokemons(): void{
        let pok = {
            name: "",
            imageUrl: "",
        }
        this.http.get<Pokemonobj> ('https://pokeapi.co/api/v2/pokemon?limit=150')
        .subscribe((pokemons: Pokemonobj) => {
            this._pokemons = pokemons;
            //pok.name = pokemons.results[0].name;
            //pok.imageUrl = pokemons.results[0].url
        
            console.log(pokemons)
        },  (error: HttpErrorResponse) => {
            this._error = error.message

        });
        
    }

    public pokemons(): Pokemonobj | null{
        return this._pokemons 
    }

  //  public pokemon(): Pokemon | null {


    //}


    public error(): string {
        return this._error;
    }
}

