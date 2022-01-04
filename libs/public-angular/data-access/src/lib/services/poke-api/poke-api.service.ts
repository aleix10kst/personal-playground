import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokeApiResponse, Pokemon } from '../../types';
import { isStringEmpty } from '@personal-playground/shared/utils';

const enum POKEMON_ENDPOINTS {
  POKEMONS = '/pokemon',
  TYPE = '/type',
  ABILITY = '/ability',
}

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private readonly API_PATH = 'https://pokeapi.co/api/v2';
  constructor(private readonly http: HttpClient) {}

  getPokemons(fetchLink: string): Observable<PokeApiResponse<Pokemon>> {
    const link = isStringEmpty(fetchLink)
      ? `${this.API_PATH}${POKEMON_ENDPOINTS.POKEMONS}`
      : fetchLink;
    return this.http.get<PokeApiResponse<Pokemon>>(link);
  }
}
