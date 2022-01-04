import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '@personal-playground/public-angular/data-access';

@Component({
  selector: 'personal-playground-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  constructor() {}

  ngOnInit(): void {}
}
