import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemons-list/pokemon-list.component';
import { PublicAngularComponentsModule } from '@personal-playground/public-angular/components';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

const routes: Routes = [{ path: '', component: PokemonsComponent }];

@NgModule({
  imports: [
    CommonModule,
    PublicAngularComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PokemonsComponent, PokemonListComponent, PokemonCardComponent],
})
export class PublicAngularFeaturePokemonModule {}
