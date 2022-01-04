import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '@personal-playground/public-angular/data-access';

@Component({
  selector: 'personal-playground-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent implements OnInit {
  @Input() pokemons!: Pokemon[] | null;

  constructor() {}

  ngOnInit(): void {}
}
