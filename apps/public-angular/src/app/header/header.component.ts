import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../app.constants';

interface HeaderLink {
  label: string;
  link: string;
}

@Component({
  selector: 'personal-playground-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerLinks: HeaderLink[] = [
    { label: 'Inici', link: ROUTES.HOME },
    { label: 'Pokemons', link: ROUTES.POKEMONS },
    { label: 'Swapi', link: '' },
    { label: 'Components', link: '' },
    { label: 'Directives', link: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
