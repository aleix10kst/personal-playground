import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'personal-playground-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  readonly vm$ = combineLatest([
    this.pokemonsService.pokemons$,
    this.pokemonsService.previousLink,
    this.pokemonsService.nextLink$,
    this.pokemonsService.count$,
  ]).pipe(
    map(([pokemons, previousLink, nextLink, count]) => ({
      pokemons,
      previousLink,
      nextLink,
      count,
    }))
  );
  constructor(private readonly pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.initializePokemons();
  }

  onClickPreviousPage(): void {
    this.pokemonsService.fetchNewPage('previous');
  }

  onClickNextPage(): void {
    this.pokemonsService.fetchNewPage('next');
  }
}
