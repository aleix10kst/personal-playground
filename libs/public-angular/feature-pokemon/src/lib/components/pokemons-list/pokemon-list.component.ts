import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '@personal-playground/public-angular/data-access';

@Component({
  selector: 'personal-playground-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons!: Pokemon[] | null;

  constructor() {}

  ngOnInit(): void {}
}
